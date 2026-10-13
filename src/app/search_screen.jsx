import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { Host, useNativeState, Row, Button } from "@expo/ui";
import { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchQuery from "@components/search/search_query";

// async function fetchData(query) {
//   try {
//     const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("failed", error);
//   }
// }

export default function ControlledTextInputExample() {
  const [searchResponseArr, setSearchResponseArr] = useState();
  // const text = useNativeState("");
  const [query, setQuery] = useState("");

  async function fetchData(query) {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      // console.log("failed", error);
      return [];
    }
  }

  const handleChangeText = (value) => {
    // "worklet";
    setQuery((prev) => value);

    // text.value = value === "Hello" ? "World" : value; 
    
  };

  // console.log(query);
  // console.log('response from array',searchResponseArr);
  

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          // backgroundColor: "red",
          borderWidth: 1,
          width: "90%",
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          paddingInline: 15,
          marginInline: "auto",
        }}
      >
        <Pressable
          onPress={async () => {
            const data = await fetchData(query);
            setSearchResponseArr(data)


            // console.log("pressed", data);
          }}
        >
          <Text>Search</Text>
        </Pressable>

        <TextInput
          textStyle={{ fontSize: 20 }}
          style={{
            flex: 1,
            // borderWidth: 1,
            borderColor: "gray",
            fontSize: 18,
            padding: 5,
          }}
          textAlign="center"
          // value={text.value}
          placeholder="Type here"
          onChangeText={handleChangeText}
        />
      </View>

      <View
        style={{
          flex: 1,
          borderWidth: 1,
        }}
      >
        <SearchQuery searchResponseArr={searchResponseArr} />
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({});

[
  {
    score: 0.8926437,
    show: {
      _links: [Object],
      averageRuntime: 30,
      dvdCountry: null,
      ended: "2017-04-16",
      externals: [Object],
      genres: [Array],
      id: 139,
      image: [Object],
      language: "English",
      name: "Girls",
      network: [Object],
      officialSite: "http://www.hbo.com/girls",
      premiered: "2012-04-15",
      rating: [Object],
      runtime: 30,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
      type: "Scripted",
      updated: 1704794122,
      url: "https://www.tvmaze.com/shows/139/girls",
      webChannel: null,
      weight: 99,
    },
  },

  {
    score: 0.87838244,
    show: {
      _links: [Object],
      averageRuntime: 41,
      dvdCountry: null,
      ended: "2019-10-14",
      externals: [Object],
      genres: [Array],
      id: 41734,
      image: [Object],
      language: "Mongolian",
      name: "GIRLS",
      network: [Object],
      officialSite: "https://www.ubstv.mn/tech-blog/index1.html",
      premiered: "2018-06-15",
      rating: [Object],
      runtime: 41,
      schedule: [Object],
      status: "Ended",
      summary: null,
      type: "Scripted",
      updated: 1743150150,
      url: "https://www.tvmaze.com/shows/41734/girls",
      webChannel: null,
      weight: 75,
    },
  },
  {
    score: 0.685348,
    show: {
      _links: [Object],
      averageRuntime: 60,
      dvdCountry: null,
      ended: "2007-05-15",
      externals: [Object],
      genres: [Array],
      id: 525,
      image: [Object],
      language: "English",
      name: "Gilmore Girls",
      network: [Object],
      officialSite: null,
      premiered: "2000-10-05",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p><b>Gilmore Girls</b> is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.</p>",
      type: "Scripted",
      updated: 1786119468,
      url: "https://www.tvmaze.com/shows/525/gilmore-girls",
      webChannel: null,
      weight: 99,
    },
  },
  {
    score: 0.68515795,
    show: {
      _links: [Object],
      averageRuntime: 31,
      dvdCountry: null,
      ended: "2022-05-18",
      externals: [Object],
      genres: [Array],
      id: 33320,
      image: [Object],
      language: "English",
      name: "Derry Girls",
      network: [Object],
      officialSite: "http://www.channel4.com/programmes/derry-girls",
      premiered: "2018-01-04",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.</p><p>It's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own</p>",
      type: "Scripted",
      updated: 1767952534,
      url: "https://www.tvmaze.com/shows/33320/derry-girls",
      webChannel: null,
      weight: 98,
    },
  },
  {
    score: 0.6829916,
    show: {
      _links: [Object],
      averageRuntime: 53,
      dvdCountry: null,
      ended: null,
      externals: [Object],
      genres: [Array],
      id: 67594,
      image: [Object],
      language: "English",
      name: "Dope Girls",
      network: null,
      officialSite: "https://www.bbc.co.uk/programmes/m0028c6h",
      premiered: "2025-02-22",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "To Be Determined",
      summary:
        "<p>As WWI ends, housewife Kate Galloway sets up a nightclub in Soho to support her daughters. But Kate must contend with a dangerous gangster family and the police to survive.</p>",
      type: "Scripted",
      updated: 1743048317,
      url: "https://www.tvmaze.com/shows/67594/dope-girls",
      webChannel: [Object],
      weight: 94,
    },
  },
  {
    score: 0.6823755,
    show: {
      _links: [Object],
      averageRuntime: 60,
      dvdCountry: null,
      ended: "2013-04-29",
      externals: [Object],
      genres: [Array],
      id: 1073,
      image: [Object],
      language: "English",
      name: "Bomb Girls",
      network: [Object],
      officialSite: null,
      premiered: "2012-01-04",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>",
      type: "Scripted",
      updated: 1704793418,
      url: "https://www.tvmaze.com/shows/1073/bomb-girls",
      webChannel: null,
      weight: 93,
    },
  },
  {
    score: 0.6815361,
    show: {
      _links: [Object],
      averageRuntime: 61,
      dvdCountry: null,
      ended: "2006-12-18",
      externals: [Object],
      genres: [Array],
      id: 1308,
      image: [Object],
      language: "English",
      name: "Bad Girls",
      network: [Object],
      officialSite: null,
      premiered: "1999-06-01",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Step inside HMP Larkhall and meet the women of G-Wing, who've committed various offences that range from shoplifting to murder. <b>Bad Girls</b> shows what life is like for these women in the 'inside world' and also shows the real-life problems (and maybe behaviour!) of the officers who watch them!</p>",
      type: "Scripted",
      updated: 1749776691,
      url: "https://www.tvmaze.com/shows/1308/bad-girls",
      webChannel: null,
      weight: 92,
    },
  },
  {
    score: 0.6811085,
    show: {
      _links: [Object],
      averageRuntime: 60,
      dvdCountry: null,
      ended: "2014-09-14",
      externals: [Object],
      genres: [Array],
      id: 3418,
      image: [Object],
      language: "English",
      name: "ANZAC Girls",
      network: [Object],
      officialSite: "http://www.abc.net.au/tv/programs/anzac-girls/",
      premiered: "2014-08-10",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Honouring the Centenary of the commencement of WW1, <b>ANZAC Girls</b> is a moving new six-part series based on the unique, and rarely told true stories of Australian and New Zealand nurses serving at Gallipoli and the Western Front.</p>",
      type: "Scripted",
      updated: 1704793770,
      url: "https://www.tvmaze.com/shows/3418/anzac-girls",
      webChannel: null,
      weight: 91,
    },
  },
  {
    score: 0.68078434,
    show: {
      _links: [Object],
      averageRuntime: 60,
      dvdCountry: null,
      ended: "2021-07-22",
      externals: [Object],
      genres: [Array],
      id: 23542,
      image: [Object],
      language: "English",
      name: "Good Girls",
      network: [Object],
      officialSite: "https://www.nbc.com/good-girls",
      premiered: "2018-02-26",
      rating: [Object],
      runtime: 60,
      schedule: [Object],
      status: "Ended",
      summary:
        '<p><b>Good Girls</b> follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.</p>',
      type: "Scripted",
      updated: 1742614225,
      url: "https://www.tvmaze.com/shows/23542/good-girls",
      webChannel: null,
      weight: 90,
    },
  },
  {
    score: 0.67712635,
    show: {
      _links: [Object],
      averageRuntime: 13,
      dvdCountry: null,
      ended: "2023-10-31",
      externals: [Object],
      genres: [Array],
      id: 32087,
      image: [Object],
      language: "English",
      name: "Chicken Girls",
      network: null,
      officialSite:
        "https://www.youtube.com/playlist?list=PLVewHiZp3_LPhqzbcZFmS3iuDm9HymTsy",
      premiered: "2017-09-05",
      rating: [Object],
      runtime: null,
      schedule: [Object],
      status: "Ended",
      summary:
        "<p>Rhyme and her friends — known by their 'ship name, \"The Chicken Girls\" — have been dancing together forever. But this year, everything's changing...</p>",
      type: "Scripted",
      updated: 1747680717,
      url: "https://www.tvmaze.com/shows/32087/chicken-girls",
      webChannel: [Object],
      weight: 84,
    },
  },
];
