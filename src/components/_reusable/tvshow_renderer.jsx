import { View, FlatList, StyleSheet, Image } from "react-native";
import { Host, Text, Column, Row } from "@expo/ui";
import { Link } from "expo-router";
import Lucide from "@react-native-vector-icons/lucide";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const watchedShowss = [
  {
    id: 82,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-04-17",
    ended: "2019-05-19",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.9 },
    weight: 100,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 24493, thetvdb: 121361, imdb: "tt0944947" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    updated: 1787682562,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/82" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1623968",
        name: "The Iron Throne",
      },
    },
  },
  {
    id: 152,
    url: "https://www.tvmaze.com/shows/152/ray-donovan",
    name: "Ray Donovan",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-30",
    ended: "2022-01-14",
    officialSite: "http://www.sho.com/sho/ray-donovan/home",
    schedule: { time: "20:00", days: ["Sunday"] },
    rating: { average: 8.1 },
    weight: 95,
    network: {
      id: 9,
      name: "Paramount+ with Showtime",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.sho.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 30309, thetvdb: 259866, imdb: "tt2249007" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/531511.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/531511.jpg",
    },
    summary:
      "<p>Set in the sprawling mecca of the rich and famous, Ray Donovan does the dirty work for LA's top power players as the go-to guy who makes the problems of the city's celebrities, superstar athletes, and business moguls disappear. This powerful drama unfolds when his father is unexpectedly released from prison, setting off a chain of events that shakes the Donovan family to its core.</p>",
    updated: 1785469085,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/152" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2256456",
        name: "Ray Donovan: The Movie",
      },
    },
  },
  {
    id: 102,
    url: "https://www.tvmaze.com/shows/102/boardwalk-empire",
    name: "Boardwalk Empire",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2010-09-19",
    ended: "2014-10-26",
    officialSite: "http://www.hbo.com/boardwalk-empire",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.4 },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 23561, thetvdb: 84947, imdb: "tt0979432" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012589.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012589.jpg",
    },
    summary:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
    updated: 1755453455,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/102" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/6977",
        name: "Eldorado",
      },
    },
  },
  {
    id: 8452,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-04-17",
    ended: "2019-05-19",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.9 },
    weight: 100,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 24493, thetvdb: 121361, imdb: "tt0944947" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    updated: 1787682562,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/82" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1623968",
        name: "The Iron Throne",
      },
    },
  },
  {
    id: 124852,
    url: "https://www.tvmaze.com/shows/152/ray-donovan",
    name: "Ray Donovan",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-30",
    ended: "2022-01-14",
    officialSite: "http://www.sho.com/sho/ray-donovan/home",
    schedule: { time: "20:00", days: ["Sunday"] },
    rating: { average: 8.1 },
    weight: 95,
    network: {
      id: 9,
      name: "Paramount+ with Showtime",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.sho.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 30309, thetvdb: 259866, imdb: "tt2249007" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/531511.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/531511.jpg",
    },
    summary:
      "<p>Set in the sprawling mecca of the rich and famous, Ray Donovan does the dirty work for LA's top power players as the go-to guy who makes the problems of the city's celebrities, superstar athletes, and business moguls disappear. This powerful drama unfolds when his father is unexpectedly released from prison, setting off a chain of events that shakes the Donovan family to its core.</p>",
    updated: 1785469085,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/152" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2256456",
        name: "Ray Donovan: The Movie",
      },
    },
  },
  {
    id: 1589202,
    url: "https://www.tvmaze.com/shows/102/boardwalk-empire",
    name: "Boardwalk Empire",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2010-09-19",
    ended: "2014-10-26",
    officialSite: "http://www.hbo.com/boardwalk-empire",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.4 },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 23561, thetvdb: 84947, imdb: "tt0979432" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012589.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012589.jpg",
    },
    summary:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
    updated: 1755453455,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/102" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/6977",
        name: "Eldorado",
      },
    },
  },
  {
    id: 14282,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-04-17",
    ended: "2019-05-19",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.9 },
    weight: 100,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 24493, thetvdb: 121361, imdb: "tt0944947" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    updated: 1787682562,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/82" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1623968",
        name: "The Iron Throne",
      },
    },
  },
  {
    id: 1975123652,
    url: "https://www.tvmaze.com/shows/152/ray-donovan",
    name: "Ray Donovan",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-30",
    ended: "2022-01-14",
    officialSite: "http://www.sho.com/sho/ray-donovan/home",
    schedule: { time: "20:00", days: ["Sunday"] },
    rating: { average: 8.1 },
    weight: 95,
    network: {
      id: 9,
      name: "Paramount+ with Showtime",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.sho.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 30309, thetvdb: 259866, imdb: "tt2249007" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/531511.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/531511.jpg",
    },
    summary:
      "<p>Set in the sprawling mecca of the rich and famous, Ray Donovan does the dirty work for LA's top power players as the go-to guy who makes the problems of the city's celebrities, superstar athletes, and business moguls disappear. This powerful drama unfolds when his father is unexpectedly released from prison, setting off a chain of events that shakes the Donovan family to its core.</p>",
    updated: 1785469085,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/152" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2256456",
        name: "Ray Donovan: The Movie",
      },
    },
  },
  {
    id: 1579125602,
    url: "https://www.tvmaze.com/shows/102/boardwalk-empire",
    name: "Boardwalk Empire",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2010-09-19",
    ended: "2014-10-26",
    officialSite: "http://www.hbo.com/boardwalk-empire",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.4 },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 23561, thetvdb: 84947, imdb: "tt0979432" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012589.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012589.jpg",
    },
    summary:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
    updated: 1755453455,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/102" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/6977",
        name: "Eldorado",
      },
    },
  },
  {
    id: 8265862,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-04-17",
    ended: "2019-05-19",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.9 },
    weight: 100,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 24493, thetvdb: 121361, imdb: "tt0944947" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    updated: 1787682562,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/82" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1623968",
        name: "The Iron Throne",
      },
    },
  },
  {
    id: 15014782,
    url: "https://www.tvmaze.com/shows/152/ray-donovan",
    name: "Ray Donovan",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-30",
    ended: "2022-01-14",
    officialSite: "http://www.sho.com/sho/ray-donovan/home",
    schedule: { time: "20:00", days: ["Sunday"] },
    rating: { average: 8.1 },
    weight: 95,
    network: {
      id: 9,
      name: "Paramount+ with Showtime",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.sho.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 30309, thetvdb: 259866, imdb: "tt2249007" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/212/531511.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/212/531511.jpg",
    },
    summary:
      "<p>Set in the sprawling mecca of the rich and famous, Ray Donovan does the dirty work for LA's top power players as the go-to guy who makes the problems of the city's celebrities, superstar athletes, and business moguls disappear. This powerful drama unfolds when his father is unexpectedly released from prison, setting off a chain of events that shakes the Donovan family to its core.</p>",
    updated: 1785469085,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/152" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2256456",
        name: "Ray Donovan: The Movie",
      },
    },
  },
  {
    id: 1056852,
    url: "https://www.tvmaze.com/shows/102/boardwalk-empire",
    name: "Boardwalk Empire",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2010-09-19",
    ended: "2014-10-26",
    officialSite: "http://www.hbo.com/boardwalk-empire",
    schedule: { time: "21:00", days: ["Sunday"] },
    rating: { average: 8.4 },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: { tvrage: 23561, thetvdb: 84947, imdb: "tt0979432" },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012589.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012589.jpg",
    },
    summary:
      "<p>As the country struggles to cope with the Great Depression and the end of Prohibition looms, Nucky Thompson looks to legitimize himself through alliances with liquor producers, while rivals Lucky Luciano and Meyer Lansky seek to consolidate their power in the wake of Arnold Rothstein's death and eliminate all competition - by any means necessary on <b>Boardwalk Empire</b>.</p>",
    updated: 1755453455,
    _links: {
      self: { href: "https://api.tvmaze.com/shows/102" },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/6977",
        name: "Eldorado",
      },
    },
  },
];

const TvShowRenderer = ({ item }) => {

  return (
    <View
      key={item.id}
      style={{
        flex: 1,
      }} 
    >
      <Image
        resizeMode="stretch"
        src={item.image.original}
        style={styles.image}
      />
      <Host matchContents>
        <Column spacing={2}>
          <Text>{item.name}</Text>
          <Text>5S</Text>
        </Column>
      </Host>
    </View>
  );
};

// main component
const TvShows = ({ watchedShowsss, title }) => (
  <View style={{ height: 250, borderWidth: 2 }}>
    <View style={styles.container}>
      <Host matchContents>
        <Text style={[styles.text]}>{title}</Text>
      </Host>
      <Lucide name="chevron-right" size={28} />
    </View>

    <FlatList
      data={watchedShowss}
      horizontal
      renderItem={TvShowRenderer}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 150,
    // borderRadius: 15,
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default TvShows;
