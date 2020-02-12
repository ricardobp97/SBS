import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
// 'https://images5.alphacoders.com/526/thumb-1920-526887.jpg'
export default function SingleLineGridList(props) {
    const classes = useStyles();
    let display = props.data === undefined ? <div/> :
    <div className={classes.root}>
        <GridList className={classes.gridList} cols={4}>
            {props.data.map(item => (
                <GridListTile key={item._id}>
                    <img src={item.name === 'Fullmetal Alchemist: Brotherhood' ? 'https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' : ( item.name === 'GintamaÂ°' ? 'https://img1.ak.crunchyroll.com/i/spire2/54c15675670ba44c1f98c3e11ba0cddf1515030877_full.jpg' : (item.name === 'Steins;Gate' ? 'https://img1.ak.crunchyroll.com/i/spire2/ff06631478e5344b467111c7aa85ff881302201468_main.jpg' : (item.name === 'Gintama&#039;' ? 'https://hacchifansub.net/wp-content/uploads/2013/03/Gintama.jpeg' : (item.name === 'Death Note' ? 'https://bloody-disgusting.com/wp-content/uploads/2020/01/death-note.png' : (item.name === 'Shingeki no Kyojin' ? 'https://img.quizur.com/f/img5d644ce3147369.42382935.jpg?lastEdited=1566854375' : (item.name === 'Sword Art Online' ? 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SwordArtOnlineHollowRealizationDeluxeEdition_image1600w.jpg' : (item.name === 'Taka no Tsume 8: Yoshida-kun no X-Files' ? 'https://i.ebayimg.com/images/g/k4gAAOSwmgJY53mr/s-l640.jpg' : (item.name === 'Mogura no Motoro' ? 'https://cdn.myanimelist.net/images/anime/5/81484l.jpg' : (item.name === 'Kimi no Na wa.' ? 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xq1Ugd62d23K2knRUx6xxuALTZB.jpg' : (item.name === 'Kahei no Umi' ? 'https://cdn.myanimelist.net/images/anime/7/80827.jpg' : (item.name === 'Sen to Chihiro no Kamikakushi' ? 'https://c8.alamy.com/comp/DXEEP5/sen-to-chihiro-no-kamikakushi-DXEEP5.jpg' : (item.name === 'Mononoke Hime' ? 'http://1.bp.blogspot.com/-wiY7lvYOb1M/V4AeV21D_EI/AAAAAAAAQ5A/2JJtjJlN8d8TdEzZTZiGYn9JcAWJpaH3gCK4B/s1600/princesa-mononoke-foto.jpg' : (item.name === 'Howl no Ugoku Shiro' ? 'https://d3i6li5p17fo2k.cloudfront.net/en/rimage/pivot_half_1152/image/5365/606fa907d90f20bb79efb5a38b6532a2' : (item.name === 'Byousoku 5 Centimeter' ? 'http://1.bp.blogspot.com/-TzB-92Mt1_k/UDmxi5pse9I/AAAAAAAAAuw/t6ypkR4w55A/s1600/byousoku_5_centimeter-8178.jpg' : (item.name === 'Yakusoku: Africa Mizu to Midori' ? 'https://cdn.myanimelist.net/r/360x360/images/anime/10/66251.jpg?s=066acddcdb6149af00c4d66780f222e5' : (item.name === 'Ginga Eiyuu Densetsu' ? 'https://static.madinfinite.com/images_itens/big/1/ginga-eiyuu-densetsu-die-neue-these-seiran-2-cover-000333.jpg' : (item.name === 'Mienu Me ni Kanjita Kumotoriyama no Asahi' ? 'https://animerobo.com/wp-content/uploads/2018/11/kogitsune-no-okurimono.png' : (item.name === 'Santa-san wa Dai Isogashi' ? 'https://cdn.myanimelist.net/images/anime/13/82213l.jpg' : (item.name === 'FLCL' ? 'https://images-na.ssl-images-amazon.com/images/I/51Il5Erp25L._SY445_.jpg' : (item.name === 'Hellsing Ultimate' ? 'https://images-na.ssl-images-amazon.com/images/I/918zxjsHltL._RI_.jpg' : (item.name === 'Highschool of the Dead: Drifters of the Dead' ? 'https://upload.wikimedia.org/wikipedia/pt/archive/d/d9/20101124185530%21Hotd_vol.1.jpg' : (item.name === 'Mirai Nikki Redial' ? 'https://static.fnac-static.com/multimedia/Images/FR/MC/b5/8e/50/38833845/1540-1/tsp20190223062022/Redial-Livre-en-VO.jpg' : (item.name === 'Angel Beats!' ? 'http://cabanadoleitor.com.br/wp-content/uploads/2014/12/Angel-Beats.jpg' :(item.name === 'Haikyuu!! Second Season' ? 'https://goyabu.com/capas/haikyuu-second-season-episodios.jpg' : (item.name === 'Aria The Origination' ? 'https://www.animenewsnetwork.com/hotlink/images/encyc/A8657-14.jpg' : (item.name === 'Shinsekai yori' ? 'https://i.pinimg.com/originals/a3/3a/0a/a33a0a1d12e82d3f8e55b58cf997058b.webp' : (item.name === 'Monogatari Series: Second Season' ? 'https://www.anitube.site/wp-content/uploads/Monogatari-Series-Second-Season-poster.jpg' : (item.name === 'Hajime no Ippo' ? 'https://i2.wp.com/kingofanime.com/wp-content/uploads/2019/08/67666743_2928789560527369_5344650736137404416_n.jpg?resize=676%2C675&ssl=1' : (item.name === 'Uchuu Kyoudai' ? 'https://goyabu.com/capas/uchuu-kyoudai-episodios.jpg' : 'https://images5.alphacoders.com/526/thumb-1920-526887.jpg')))))))))))))))))))))))))))))} alt={item.name} />
                    <GridListTileBar
                        title={item.name}
                        subtitle={'Rating: ' + item.rating}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                    />
                </GridListTile>
            ))}
        </GridList>
    </div>

    return (
        <div>{display}</div>
    )
}