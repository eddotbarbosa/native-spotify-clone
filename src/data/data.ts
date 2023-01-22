import {ImageSourcePropType} from 'react-native';

import randomColor from 'randomcolor';

import {TrackProps} from '../components/track/track';

import WhatsTheStoryMorningGlory from '../assets/images/whats-the-story-morning-glory.jpg';
import GothAngelSinner from '../assets/images/goth-angel-sinner.jpg';
import Family from '../assets/images/family.jpg';
import TheEmpireStrikesFirst from '../assets/images/the-empire-strikes-first.jpg';
import LookAtMeNow from '../assets/images/look-at-me-now.jpg';
import DailyMix1 from '../assets/images/daily-mix-1.jpg';
import DailyMix2 from '../assets/images/daily-mix-2.jpg';
import DailyMix3 from '../assets/images/daily-mix-3.jpg';
import DailyMix4 from '../assets/images/daily-mix-4.jpg';
import DailyDriver from '../assets/images/daily-driver.jpg';
import KickAssMetal from '../assets/images/kick-ass-metal.jpg';
import Popup from '../assets/images/popup.jpg';
import TodaysTopHits from '../assets/images/todays-top-hits.jpg';
import TrapperzBrasil from '../assets/images/trapperz-brasil.jpg';
import ViralHits from '../assets/images/viral-hits.jpg';
import PopRising from '../assets/images/pop-rising.jpg';
import AllNewRock from '../assets/images/all-new-rock.jpg';
import AnimeNow from '../assets/images/anime-now.jpg';
import kimBops from '../assets/images/kim-bops.jpg';
import newBoots from '../assets/images/new-boots.jpg';

import AvatarAudioSlave from '../assets/images/avatar-audio-slave.jpg';
import AvatarBadReligion from '../assets/images/avatar-bad-religion.jpg';
import AvatarBrennanSavage from '../assets/images/avatar-brennan-savage.jpg';
import AvatarIssues from '../assets/images/avatar-issues.jpg';
import AvatarjuiceWrld from '../assets/images/avatar-juice-wrld.jpg';
import AvatarLilPeep from '../assets/images/avatar-lil-peep.jpg';
import AvatarNoahGundersen from '../assets/images/avatar-noah-gundersen.jpg';
import AvatarPostMalone from '../assets/images/avatar-post-malone.jpg';
import AvatarWhiteBuffalo from '../assets/images/avatar-white-buffalo.jpg';
import AvatarXxxTentacion from '../assets/images/avatar-xxx-tentacion.jpg';




const recently: TrackProps[] = [
  {
    image: WhatsTheStoryMorningGlory,
    name: 'Don\'t look back anger',
    artists: ['Oasis']
  },
  {
    image: GothAngelSinner,
    name: 'When I Lie',
    artists: ['Lil Peep']
  },
  {
    image: Family,
    name: 'Nashville',
    artists: ['Noah Gundersen']
  },
  {
    image: TheEmpireStrikesFirst,
    name: 'All There Is',
    artists: ['Bad Religion']
  },
  {
    image: LookAtMeNow,
    name: 'Look at Me Now',
    artists: ['Brennan Savage']
  }
];

const madeFor: TrackProps[] = [
  {
    image: DailyMix1,
    name: 'Daily Mix 1',
    artists: ['Yameii Online', 'Deko', 'TOKYOFILL']
  },
  {
    image: DailyMix2,
    name: 'Daily Mix 2',
    artists: ['Lil Peep', 'Brennan Savage', 'BEXEY']
  },{
    image: DailyMix3,
    name: 'Daily Mix 3',
    artists: ['(sic)boy', 'Matt Cab', 'JP THE WAY']
  },{
    image: DailyMix4,
    name: 'Daily Mix 4',
    artists: ['Juice WRLD', 'XXXTENTACION', 'Post Malone']
  },{
    image: DailyDriver,
    name: 'Daily Driver',
    artists: ['A mix of news and music made for you']
  },
];

const todaysBiggestHits: TrackProps[] = [
  {
    image: KickAssMetal,
    name: 'Kick Ass Metal',
    artists: ['Sheep Token on top of the biggest Metal Playlist']
  },
  {
    image: ViralHits,
    name: 'Viral Hits',
    artists: ['Viral, tranding and taking off.']
  },
  {
    image: TodaysTopHits,
    name: 'Today\'s Top Hits',
    artists: ['SZA is on top of the Hottest 50!']
  },
  {
    image: Popup,
    name: 'Pop UP',
    artists: ['Super mega hits! Foto: Miley Cyrus']
  },
  {
    image: TrapperzBrasil,
    name: 'Trapperz Brasil',
    artists: ['Aqui é só o trem caro do trap! Foto: Orochi']
  },
];

const freshNewMusic: TrackProps[] = [
  {
    image: AnimeNow,
    name: 'Anime Now',
    artists: ['Best new Anime track for all Anime fans!']
  },
  {
    image: AllNewRock,
    name: 'All New Rock',
    artists: ['The Best New Tracjs every week. Cover: Enter Shikari']
  },
  {
    image: kimBops,
    name: 'KimBops!',
    artists: ['Rolling with the \'bops\' in your Kimbap. Bringing you the songs that are currently trending and everything else in between. Cover: LOOKISM']
  },
  {
    image: PopRising,
    name: 'Pop Rising',
    artists: ['The hits of tomorrow are on Spotify today. Cover: Ayra Starr']
  },
  {
    image: newBoots,
    name: 'New Boots',
    artists: ['New Music Discovery is what we\'re about. Try it on for size. Cover: Priscilla Block']
  },
];

interface SearchProps {
  id: string;
  name: string;
  bg: string;
}

const search = [
  {id: '01', bg: randomColor() , name: 'Podcasts'},
  {id: '02', bg: randomColor() , name: 'Made For You'},
  {id: '03', bg: randomColor() , name: 'New releases'},
  {id: '04', bg: randomColor() , name: 'Brazil'},
  {id: '05', bg: randomColor() , name: 'Sertanejo'},
  {id: '06', bg: randomColor() , name: 'Brazilian Funk'},
  {id: '07', bg: randomColor() , name: 'Pop'},
  {id: '08', bg: randomColor() , name: 'Sertanejo'},
  {id: '09', bg: randomColor() , name: 'Brazilian Funk'},
  {id: '10', bg: randomColor() , name: 'Pop'},
  {id: '11', bg: randomColor() , name: 'Charts'},
  {id: '12', bg: randomColor() , name: 'Live Events'},
  {id: '13', bg: randomColor() , name: 'Hip-Hop'},
  {id: '14', bg: randomColor() , name: 'Samba & Pagode'},
  {id: '15', bg: randomColor() , name: 'MBP'},
  {id: '16', bg: randomColor() , name: 'AMPLIFIKA'},
  {id: '17', bg: randomColor() , name: 'Discover'},
  {id: '18', bg: randomColor() , name: 'Dance/Electronic'},
  {id: '19', bg: randomColor() , name: 'Christian & Gospel'},
  {id: '20', bg: randomColor() , name: 'Rock'},
  {id: '21', bg: randomColor() , name: 'Indie'},
  {id: '22', bg: randomColor() , name: 'RADAR'},
  {id: '23', bg: randomColor() , name: 'Pride'},
  {id: '24', bg: randomColor() , name: 'EQUAL'},
  {id: '25', bg: randomColor() , name: 'Fresh Finds'},
  {id: '26', bg: randomColor() , name: 'Mood'},
  {id: '27', bg: randomColor() , name: 'Workout'},
  {id: '28', bg: randomColor() , name: 'Chill'},
  {id: '29', bg: randomColor() , name: 'Party'},
  {id: '30', bg: randomColor() , name: 'At Home'},
  {id: '31', bg: randomColor() , name: 'In the car'},
  {id: '32', bg: randomColor() , name: 'Sleep'},
  {id: '33', bg: randomColor() , name: 'Romance'},
  {id: '34', bg: randomColor() , name: 'Cooking & Dining'},
  {id: '35', bg: randomColor() , name: 'Wellness'},
  {id: '36', bg: randomColor() , name: 'Focus'},
  {id: '37', bg: randomColor() , name: 'Trending'},
  {id: '38', bg: randomColor() , name: 'Decades'},
  {id: '39', bg: randomColor() , name: 'Spotify Singles'},
  {id: '40', bg: randomColor() , name: 'Cities'},
  {id: '41', bg: randomColor() , name: 'Travel'},
  {id: '42', bg: randomColor() , name: 'Summer'},
  {id: '43', bg: randomColor() , name: 'Latin'},
  {id: '44', bg: randomColor() , name: 'R&B'},
  {id: '45', bg: randomColor() , name: 'K-pop'},
  {id: '46', bg: randomColor() , name: 'Songwriters'},
  {id: '47', bg: randomColor() , name: 'Music + Talk'},
  {id: '48', bg: randomColor() , name: 'Kids & Family'},
  {id: '49', bg: randomColor() , name: 'TV & Movies'},
  {id: '50', bg: randomColor() , name: 'Gaming'},
  {id: '51', bg: randomColor() , name: 'Anime'},
  {id: '52', bg: randomColor() , name: 'Tastemakers'},
  {id: '53', bg: randomColor() , name: 'Netflix'},
  {id: '54', bg: randomColor() , name: 'Student'},
  {id: '55', bg: randomColor() , name: 'League of Legends'},
  {id: '56', bg: randomColor() , name: 'Reggae'},
  {id: '57', bg: randomColor() , name: 'Caribbean'},
  {id: '58', bg: randomColor() , name: 'Afro'},
  {id: '59', bg: randomColor() , name: 'Arab'},
  {id: '60', bg: randomColor() , name: 'Asian Pacific Islander Heritage Month'},
  {id: '61', bg: randomColor() , name: 'Happy Holidays'},
  {id: '62', bg: randomColor() , name: 'Classical'},
  {id: '63', bg: randomColor() , name: 'Instrumental'},
  {id: '64', bg: randomColor() , name: 'Jazz'},
  {id: '65', bg: randomColor() , name: 'Folk & Acoustic'},
  {id: '66', bg: randomColor() , name: 'Soul'},
  {id: '67', bg: randomColor() , name: 'Metal'},
  {id: '68', bg: randomColor() , name: 'Punk'},
  {id: '69', bg: randomColor() , name: 'Blues'},
  {id: '70', bg: randomColor() , name: 'Funk & Disco'},
  {id: '71', bg: randomColor() , name: 'Ambient'},
  {id: '72', bg: randomColor() , name: 'Alternative'},
  {id: '73', bg: randomColor() , name: 'Country'},
  {id: '74', bg: randomColor() , name: 'Halloween'},
];

interface LibraryProps {
  avatar: ImageSourcePropType;
  name: string;
  type: 'artist' | 'playlist';
}

const library: LibraryProps[] = [
  {
    avatar: AvatarAudioSlave,
    name: 'Audio Slave',
    type: 'artist',
  },
  {
    avatar: AvatarBadReligion,
    name: 'Bad Religion',
    type: 'artist',
  },
  {
    avatar: AvatarBrennanSavage,
    name: 'Brennan Savage',
    type: 'artist',
  },
  {
    avatar: AvatarIssues,
    name: 'Issues',
    type: 'artist',
  },
  {
    avatar: AvatarjuiceWrld,
    name: 'Juice WRLD',
    type: 'artist',
  },
  {
    avatar: AvatarLilPeep,
    name: 'Lil Peep',
    type: 'artist',
  },
  {
    avatar: AvatarNoahGundersen,
    name: 'Noah Gundersen',
    type: 'artist',
  },
  {
    avatar: AvatarPostMalone,
    name: 'Post Malone',
    type: 'artist',
  },
  {
    avatar: AvatarWhiteBuffalo,
    name: 'White Buffalo',
    type: 'artist',
  },
  {
    avatar: AvatarXxxTentacion,
    name: 'XXXTENTACION',
    type: 'artist',
  }
]

export {recently, madeFor, todaysBiggestHits, freshNewMusic, SearchProps, search, library, LibraryProps};
