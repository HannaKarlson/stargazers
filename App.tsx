/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useRef, createContext} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  //   ScrollView,
  StatusBar,
  StyleSheet,
  //   Text,
  useColorScheme,
  View,
  Keyboard,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   //Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import AppInput from './src/components/AppInput';
import GazersList from './src/components/GazersList';
import {getStarGazers} from './src/services';
import LoadingSkeleton from './src/components/LoadingSkeleton';
import MessageScreen from './src/components/MessageScreen';
import {NO_SEARCH, NO_OWNER, NO_REPO, NO_RESULT} from './src/constants';
import colors from './src/theme/colors';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'green' : 'red',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
export const ThemeContext = createContext<ColorScheme>('light');

function App(): React.JSX.Element {
  const colorScheme = useColorScheme() || 'light';
  const isDarkMode = colorScheme === 'dark';
  const nextUrlRef = useRef(null);
  const [starGazers, setStarGazers] = useState([]);
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [message, setMessage] = useState(NO_SEARCH);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreIsLoading, setLoadMoreIsLoading] = useState(false);
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? colors.dark50 : colors.white,
  };
  const fetchStarGazers = async () => {
    setMessage('');
    nextUrlRef.current = null;
    setIsLoading(true);
    try {
      const result = await getStarGazers({user: owner, repo: repo, url: null});
      if (result?.data) {
        setStarGazers(result.data);
        nextUrlRef.current = result.nextUrl;
      } else {
        setMessage(NO_RESULT);
        setStarGazers([]);
      }
    } catch (e) {
      setMessage(e);
      setStarGazers([]);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchMoreStarGazers = async () => {
    if (nextUrlRef.current) {
      setLoadMoreIsLoading(true);
      const result = await getStarGazers({
        user: owner,
        repo: repo,
        url: nextUrlRef.current,
      });
      if (typeof result === 'string') {
        setMessage(result);
      } else {
        setMessage('');
        setStarGazers([...starGazers, ...result.data]);
        nextUrlRef.current = result.nextUrl;
      }
      console.log('logging more');
      setLoadMoreIsLoading(false);
      return;
    }
    console.log('no more to load');
  };
  const handleSearchStarGazers = () => {
    Keyboard.dismiss();
    if (!owner) {
      return setMessage(NO_OWNER);
    }
    if (!repo) {
      return setMessage(NO_REPO);
    }
    fetchStarGazers();
  };
  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.container}>
          <LoadingSkeleton />
        </View>
      );
    }
    if (message) {
      return (
        <View style={styles.container}>
          <MessageScreen message={message} />
        </View>
      );
    }
    return (
      <GazersList
        gazers={starGazers}
        loadMoreElements={() => fetchMoreStarGazers()}
        loadMoreIsLoading={loadMoreIsLoading}
      />
    );
  };
console.log({repo})
  return (
    <ThemeContext.Provider value={colorScheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Header
          onChangeRepo={text => setRepo(text)}
          onChangeOwner={text => setOwner(text)}
          onChangeRepo={text => setRepo(text)}
          onSearch={handleSearchStarGazers}
          validSearch={owner && repo}
        />
        {renderContent()}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  messageScreenContainer: {
    flex: 1,
  }
});

export default App;
