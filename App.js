import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Keyboard,
} from 'react-native';
import Header from './src/components/Header';
import GazersList from './src/components/GazersList';
import {getStarGazers} from './src/services';
import LoadingSkeleton from './src/components/LoadingSkeleton';
import MessageScreen from './src/components/MessageScreen';
import {
  NO_SEARCH,
  NO_OWNER,
  NO_REPO,
  NO_RESULT,
  SPELLING_ERROR_REPO,
  SPELLING_ERROR_OWNER,
} from './src/constants';
import colors from './src/theme/colors';
import {ThemeContext} from './src/contexts/ThemeContext';

const App = () => {
  const colorScheme = useColorScheme() || 'light';
  const isDarkMode = colorScheme === 'dark';
  const nextUrlRef = useRef(null);
  const ownerRef = useRef('');
  const repoRef = useRef('');
  const [starGazers, setStarGazers] = useState([]);
  const [owner, setOwner] = useState({present: false, error: false});
  const [repo, setRepo] = useState({present: false, error: false});
  const [message, setMessage] = useState(NO_SEARCH);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreIsLoading, setLoadMoreIsLoading] = useState(false);
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? colors.dark50 : colors.white,
  };
  const handleOwnerChange = text => {
    //check that text !== ownerRef.current to avoid call onBlur ios
    if (owner.error && text !== ownerRef.current) {
      setOwner({...owner, error: false});
    }
    if (!owner.present && text !== '') {
      setOwner({...owner, present: true});
    }
    if (text === '' && owner.error) {
      setOwner({present: false, error: false});
    }
    ownerRef.current = text.trim();
  };
  const handleRepoChange = text => {
    //check that text !== repoRef.current to avoid call onBlur ios
    if (repo.error && text !== repoRef.current) {
      setRepo({...repo, error: false});
    }
    if (!repo.present && text !== '') {
      setRepo({...repo, present: true});
    }
    if (text === '' && repo.error) {
      setRepo({present: false, error: false});
    }
    repoRef.current = text.trim();
  };
  const fetchStarGazers = async () => {
    setMessage('');
    nextUrlRef.current = null;
    setIsLoading(true);
    try {
      const result = await getStarGazers({
        user: ownerRef.current,
        repo: repoRef.current,
        url: null,
      });
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
        user: ownerRef.current,
        repo: repoRef.current,
        url: nextUrlRef.current,
      });
      if (typeof result === 'string') {
        setMessage(result);
      } else {
        setMessage('');
        setStarGazers([...starGazers, ...result.data]);
        nextUrlRef.current = result.nextUrl;
      }
      setLoadMoreIsLoading(false);
      return;
    }
  };
  const handleSearchStarGazers = () => {
    Keyboard.dismiss();
    if (!owner.present && !repo.present) {
      setOwner({present: false, error: true});
      setRepo({present: false, error: true});
      return setMessage(NO_OWNER);
    }
    if (!owner.present) {
      setOwner({present: false, error: true});
      return setMessage(NO_OWNER);
    }
    if (!repo.present) {
      setRepo({present: false, error: true});
      return setMessage(NO_REPO);
    }
    if (!/^[A-Za-z0-9._/-]+$/.test(ownerRef?.current)) {
      setOwner({...owner, error: true});
      setMessage(SPELLING_ERROR_OWNER);
      return;
    }
    if (!/^[A-Za-z0-9._/-]+$/.test(repoRef?.current)) {
      setRepo({...repo, error: true});
      setMessage(SPELLING_ERROR_REPO);
      return;
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
  return (
    <ThemeContext.Provider value={colorScheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Header
          onChangeRepo={text => handleRepoChange(text)}
          onChangeOwner={text => handleOwnerChange(text)}
          onSearch={handleSearchStarGazers}
          validSearch={owner && repo}
          error={{ownerError: owner.error, repoError: repo.error}}
        />
        {renderContent()}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

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
  },
});

export default App;
