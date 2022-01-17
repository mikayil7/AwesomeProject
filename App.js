import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

export default App = () => {
  let randomcount = Math.floor(Math.random() * 10);
  const factorial = value => {
    let f = 1;
    for (let i = 1; i <= value; i++) {
      f = f * i;
    }
    return f;
  };
  const oddordouble = randomcount => {
    if (randomcount % 2 == 0) {
      return 'Double';
    } else {
      return 'Odd';
    }
  };

  let numList = [];
  for (let index = 0; index < 10; index++) {
    numList.push(Math.floor(Math.random() * 100));
  } 
  console.log(numList);

  for (let i = 0; i < numList.length; i++) {
    console.log(numList[i]);
  }
  console.log('***********************ForEach************************');
  numList.forEach(element => {
    console.log(element);
  });

  console.log('********************MAP*****************************');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textstyle}>
          Header : {randomcount}! = {factorial(randomcount)}
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.left}>
          <Text>
            left:{randomcount} is {oddordouble(randomcount)}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.textstyle}>right</Text>
          {numList.map((num, index) => (
            <Text style={styles.textstyle} key={index.toString()}>
              {num}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textstyle}>Footer </Text>
      </View>
    </View>
  );
};
