import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  FlatList,
  Image,
} from "react-native";

import FontAwesome from "@react-native-vector-icons/fontawesome";

export default function SearchQuery(props) {
  const { searchResponseArr } = props;
  console.log("hey", searchResponseArr);

  const TvShowRenderer = ({ item }) => {
    // console.log();
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // borderRadius: 15,
          // borderWidth: 1,
        }}
      >
        <Image
          resizeMode="stretch"
          src={item.show.image.original}
          style={{
            width: 70,
            height: 70,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            padding: 10,
          }}
        >
          <Text>{`${item.show.name}`}</Text>
          <Text>
            {`${item.show.rating.average} `}
            <FontAwesome name="star" size={13} color={"orange"} />
            {` | ${item.show.premiered.slice(0, 4)} | ${item.show.genres.join(", ")}`}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={{
          marginTop: 10,
        }}
        contentContainerStyle={{
          gap: 10,
        }}
        data={searchResponseArr}
        renderItem={TvShowRenderer}
        keyExtractor={(item) => {
          return item.show.id;
        }}
      />
    </View>
  );
}

[
  {
    score: 0.8943143,
    show: {
      _links: [Object],
      averageRuntime: 31,
      dvdCountry: null,
      ended: "2018-03-09",
      externals: [Object],
      genres: [Array],
      id: 6765,
      image: [Object],
      language: "English",
      name: "Love",
      network: null,
      officialSite: "https://www.netflix.com/title/80026506",
      premiered: "2016-02-19",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Rebellious Mickey and good-natured Gus navigate the thrills and agonies of modern relationships.</p>",
      type: "Scripted",
      updated: 1726003916,
      url: "https://www.tvmaze.com/shows/6765/love",
      webChannel: [Object],
      weight: 94,
    },
  },

  {
    score: 0.87562907,
    show: {
      _links: [Object],
      averageRuntime: 80,
      dvdCountry: null,
      ended: "1998-03-24",
      externals: [Object],
      genres: [Array],
      id: 42660,
      image: [Object],
      language: "Korean",
      name: "Love",
      network: [Object],
      officialSite:
        "http://www.mbcpro.co.kr/mbcproduction/ENG/Program/programList_Desc.asp?Program_SeqNum=40",
      premiered: "1998-02-02",
      rating: [Object],
      runtime: 80,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Intersecting love stories of two people, Young Ji and In Ha are explored in the drama Love. Young Ji is a widow in her mid-thirties. After Young Ji's husband dies, her former boyfriend Joon Sup divorced his wife and becomes close to Young Ji again. It almost seems natural that they would get married. In Ha, a young man in his twenties, immediately falls in love with Young Ji during a chance meeting. Young Ji also is attracted to In Ha's pure loving heart, but knows Joon Sup is the \"right\" choice. However life and love rarely goes the way we want it.</p>",
      type: "Scripted",
      updated: 1560872852,
      url: "https://www.tvmaze.com/shows/42660/love",
      webChannel: null,
      weight: 65,
    },
  },
  {
    score: 0.68892264,
    show: {
      _links: [Object],
      averageRuntime: 68,
      dvdCountry: null,
      ended: null,
      externals: [Object],
      genres: [Array],
      id: 56862,
      image: [Object],
      language: "English",
      name: "Love Story",
      network: [Object],
      officialSite: null,
      premiered: "2026-02-12",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "To Be Determined",
      summary:
        "<p><b>Love Story</b> is a scripted anthology series of sweeping true love stories that captured the world's attention.</p>",
      type: "Scripted",
      updated: 1776879257,
      url: "https://www.tvmaze.com/shows/56862/love-story",
      webChannel: null,
      weight: 97,
    },
  },
  {
    score: 0.6878858,
    show: {
      _links: [Object],
      averageRuntime: 64,
      dvdCountry: null,
      ended: null,
      externals: [Object],
      genres: [Array],
      id: 11363,
      image: [Object],
      language: "English",
      name: "Love Island",
      network: [Object],
      officialSite: "https://www.itv.com/watch/love-island/2a3697",
      premiered: "2015-06-07",
      rating: [Object],
      runtime: 65,
      schedule: [Object],
      status: "Running",
      summary:
        "<p>On <b>Love Island</b> the Islanders must do their best to flirt, date, couple up in a bid to avoid being ‘dumped' from the Island. With new arrivals, heads may turn, while others will prove their true feelings. From romance and heart-to-hearts, to betrayal, bombshells and broken hearts, there's never a dull moment in the ultimate search for love. More texts, fire pit gatherings and challenges await the lovestruck Islanders, meaning there'll be plenty for them to dish the dirt on in the Beach Hut. Twists and turns will follow every step of the way, with shock recouplings, unexpected breakups and dramatic dumpings.</p><p>As the couples attempt to win the hearts of each other – and the public – one couple will ultimately triumph and be crowned <i>Love Island</i> winners</p>",
      type: "Reality",
      updated: 1785213647,
      url: "https://www.tvmaze.com/shows/11363/love-island",
      webChannel: null,
      weight: 95,
    },
  },
  {
    score: 0.6876935,
    show: {
      _links: [Object],
      averageRuntime: 63,
      dvdCountry: null,
      ended: null,
      externals: [Object],
      genres: [Array],
      id: 42289,
      image: [Object],
      language: "English",
      name: "Love Island",
      network: null,
      officialSite: "https://www.peacocktv.com/stream-tv/love-island",
      premiered: "2019-07-09",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Running",
      summary:
        "<p>U.S. version of the British show <b>Love Island</b> where a group of singles come to stay in a villa for a few weeks and have to couple up with one another – those who fail to find a partner to couple up with risk being dumped from the island. Islanders are on the lookout for romance, but the road to love doesn't always run smoothly. Challenges abound with new Islander arrivals and dramatic twists as friendships and relationships form. In addition to choosing their partners wisely, Islanders must also win the hearts of viewers who have the opportunity to shape events on screen and ultimately crown one lucky couple the winner, who will then have the chance to walk away with both love and the cash prize.</p>",
      type: "Reality",
      updated: 1788230040,
      url: "https://www.tvmaze.com/shows/42289/love-island",
      webChannel: [Object],
      weight: 96,
    },
  },
  {
    score: 0.68730533,
    show: {
      _links: [Object],
      averageRuntime: 30,
      dvdCountry: null,
      ended: "2021-11-11",
      externals: [Object],
      genres: [Array],
      id: 42848,
      image: [Object],
      language: "English",
      name: "Love Life",
      network: null,
      officialSite: "https://www.hbomax.com/love-life/",
      premiered: "2020-05-27",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p><b>Love Life</b> is a romantic comedy anthology, which will follow a different protagonist's quest for love each season, with each episode telling the story of one of their relationships.</p>",
      type: "Scripted",
      updated: 1763609732,
      url: "https://www.tvmaze.com/shows/42848/love-life",
      webChannel: [Object],
      weight: 94,
    },
  },
  {
    score: 0.68720746,
    show: {
      _links: [Object],
      averageRuntime: 46,
      dvdCountry: null,
      ended: null,
      externals: [Object],
      genres: [Array],
      id: 59049,
      image: [Object],
      language: "English",
      name: "Love Me",
      network: null,
      officialSite: "https://binge.com.au/shows/show-love-me!13514",
      premiered: "2021-12-26",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Running",
      summary:
        "<p><b>Love me</b> is a story about love, loss and the complexity of family relationships experienced by three different family members at distinct times of life.</p><p>The Mathiesons, Clara (30s), Glen (60s) and Aaron (20s), find themselves at an emotional crossroads following an unexpected event that changes their lives forever. In an era when the world is driven by conflict, LOVE ME is a call to the heart - a funny, sophisticated, heartfelt exploration of love in all its forms.</p>",
      type: "Scripted",
      updated: 1733041421,
      url: "https://www.tvmaze.com/shows/59049/love-me",
      webChannel: [Object],
      weight: 94,
    },
  },
  {
    score: 0.68720746,
    show: {
      _links: [Object],
      averageRuntime: 42,
      dvdCountry: null,
      ended: "2025-08-12",
      externals: [Object],
      genres: [Array],
      id: 85170,
      image: [Object],
      language: "Chinese",
      name: "Revenged Love",
      network: null,
      officialSite: "https://www.viki.com/tv/41152c-revenged-love",
      premiered: "2025-06-16",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>After Suowei's girlfriend dumps him, he decides to get revenge by seducing her new boyfriend, Chi Cheng! It started as a game, but falling in love was never part of the plan.</p>",
      type: "Scripted",
      updated: 1781615892,
      url: "https://www.tvmaze.com/shows/85170/revenged-love",
      webChannel: [Object],
      weight: 94,
    },
  },
  {
    score: 0.6865142,
    show: {
      _links: [Object],
      averageRuntime: 32,
      dvdCountry: null,
      ended: "2021-08-13",
      externals: [Object],
      genres: [Array],
      id: 37120,
      image: [Object],
      language: "English",
      name: "Modern Love",
      network: null,
      officialSite: "https://www.amazon.com/dp/B07VMF8TL9/",
      premiered: "2019-10-18",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        '<p>An unlikely friendship. A lost love resurfaced. A marriage at its turning point. A date that might not have been a date. An unconventional new family. These are unique stories about the joys and tribulations of love, each inspired by a real-life personal essay from the beloved New York Times column "<b>Modern Love</b>."</p>',
      type: "Scripted",
      updated: 1716730033,
      url: "https://www.tvmaze.com/shows/37120/modern-love",
      webChannel: [Object],
      weight: 92,
    },
  },
  {
    score: 0.6852894,
    show: {
      _links: [Object],
      averageRuntime: 60,
      dvdCountry: null,
      ended: "2011-03-20",
      externals: [Object],
      genres: [Array],
      id: 817,
      image: [Object],
      language: "English",
      name: "Big Love",
      network: [Object],
      officialSite: "http://www.hbo.com/big-love",
      premiered: "2006-03-12",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Bill Henrickson seems like a typical suburban husband and father, except for the fact that he has three wives, seven kids and three homes to maintain. The Salt Lake City polygamist has to juggle his families' needs while overseeing his growing chain of home-improvement stores and attempting to reconnect with his fundamentalist relatives.</p>",
      type: "Scripted",
      updated: 1704793364,
      url: "https://www.tvmaze.com/shows/817/big-love",
      webChannel: null,
      weight: 90,
    },
  },
];
