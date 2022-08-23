import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import CircularProgress1 from './ProgressBar';


const screen = Dimensions.get('window');
const InfoCard = ({ movie, director }) => {
  
  return (
    <View style={styles.infoCard}>
      <View style= {{display: 'flex' , flexDirection: 'column'}} >
        <Image
          source={{
            uri: `http://image.tmdb.org/t/p/w780${movie?.poster_path}`,
         }}
         style={styles.poster}
        />
      
        <View style = {{justifyContent:'center' , alignContent:'center', alignItems:'center', backgroundColor:'black' ,height:'30%' }} >
          <Text style= {{color:'#f8f698', marginTop:-25,}} >★★★</Text>
          <CircularProgress1  vote_average={movie.vote_average} />
        </View>
          
      </View>
      <View style={styles.textInfo}>
        <View></View>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style= {styles.release} >{movie.release_date}</Text>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Synopsis</Text>
        <Text style={{ color: 'white', fontSize: 10 }}>
          {movie.overview.length < 350
            ? movie.overview
            : movie.overview.substr(0, 350) + '...'}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          
        </View>
        <>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>DIRECTOR</Text>
          <Text style={{ color: 'white', fontSize: 10 }}>{director?.name}</Text>
        </>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    top: 40,
    paddingRight: 10,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  poster: {
    width: screen.width * 0.35,
    height: screen.height * 0.35
  },


  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  release: {
    color: 'rgba(255,255,255, 0.7)',
    fontSize: 12,
    fontWeight: 'bold'
  }, 

  textInfo: {
    left: 10,
    right: 10,
    bottom:10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
