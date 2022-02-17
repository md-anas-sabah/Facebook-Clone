import { Avatar } from "@mui/material";
import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="sponsored">
        <p>Sponsored</p>
        <div className="sponsor">
          <img
            src="https://scontent.fpat2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/209053773_23847680249130441_3511608975307624989_n.png.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=jSgVS1xSSxcAX8ZvJeU&_nc_ht=scontent.fpat2-1.fna&oh=00_AT-KExj-iDiFnBpvi-Ow47jGkmgqwSN49Up1lmiwSOvOLg&oe=6213F034"
            alt="pic"
            className="image"
          />
          <p>Get IntelliJ IDEA for the whole team</p>
        </div>

        <div className="sponsor">
          <img
            src="https://scontent.fpat2-2.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p240x240/272907528_6273720075552_5078009064551203957_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=67cdda&_nc_ohc=Mpf4Q4VXr00AX8AvtKn&_nc_ht=scontent.fpat2-2.fna&oh=00_AT-cAtHCqRkFI1jUin3bE0CflBSDmJNJjc6qY_r6GthMdg&oe=62122B85"
            alt="pic"
            className="image"
          />
          <p>Try Developer assistant</p>
        </div>
        <div className="sponsor">
          <img
            src="https://scontent.fpat2-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p296x100/272004290_23849095139450574_1901811719691153198_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=87IN4GjzeiAAX8z9zpI&_nc_ht=scontent.fpat2-1.fna&oh=00_AT8H07ZvtUly2ajTp-irvCnNmSjyq1qRhugQvorKmv872g&oe=6213B98E"
            alt="pic"
            className="image"
          />
          <p>GAT SET GO</p>
        </div>
      </div>

      <div className="border"></div>

      <div className="contact">
        <p>Contacts</p>
        <div className="friend">
          <Avatar
            src="https://w0.peakpx.com/wallpaper/865/901/HD-wallpaper-monkey-d-luffy-op-big-3-one-piece-anime-masterpiece.jpg"
            sx={{ height: 30, width: 30 }}
          />
          <p>Monkey D Luffy</p>
        </div>
        <div className="friend">
          <Avatar
            src="https://cdn.myanimelist.net/r/360x360/images/characters/2/284121.jpg?s=5b0448ce14c283b38583b9ceaf86ae73"
            sx={{ height: 30, width: 30 }}
          />
          <p>Naruto Uzumaki</p>
        </div>
        <div className="friend">
          <Avatar
            src="https://yt3.ggpht.com/ytc/AKedOLTituQqBQSvZshTI9-FbvzNeCcbwgqG6-xgzHRa=s900-c-k-c0x00ffffff-no-rj"
            sx={{ height: 30, width: 30 }}
          />
          <p>Roronoa Zoro</p>
        </div>
        <div className="friend">
          <Avatar
            src="https://cdn.bhdw.net/im/sanji-vinsmoke-pirate-cook-wallpaper-55920_w635.jpg"
            sx={{ height: 30, width: 30 }}
          />
          <p>Sanji</p>
        </div>
        <div className="friend">
          <Avatar
            src="https://cdn.anime-planet.com/characters/primary/vegeta-1-190x266.jpg?t=1625966045"
            sx={{ height: 30, width: 30 }}
          />
          <p>Vegeta</p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
