import React from 'react';
import {useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import NewTaste from '../NewTaste';
import Popular from '../Popular';
import Recommended from '../Recommended';

const FirstRoute = () => <NewTaste />;
const SecondRoute = () => <Popular />;
const ThirdRoute = () => <Recommended />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const TabSlider = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  // ====> for custom UI TAB Bar
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        width: 0,
      }}
      style={{backgroundColor: 'white'}}
      tabStyle={{width: 'auto'}}
      renderLabel={({route, focused}) => (
        <Text
          style={{
            fontFamily: fonts[500],
            color: focused ? colors.secondary : colors.secondary_bg,
            marginLeft: 20,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabSlider;
