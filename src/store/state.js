import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {}, /* 歌手 */
  playing: false, /* 是否播放 */
  fullScreen: false, /* 是否大屏 */
  playlist: [], /* 播放列表 */
  sequenceList: [], /*  */
  mode: playMode.sequence, /* 播放模式，默认为顺序 */
  currentIndex: -1, /* 当前index */
  disc: {}, /*  */
  topList: {}, /* 排行榜 */
  searchHistory: loadSearch(), /* 搜索历史记录 */
  playHistory: loadPlay(), /* 播放历史记录 */
  favoriteList: loadFavorite() /* 收藏列表 */
}

export default state
