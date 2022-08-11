import React, { useEffect } from "react";

import Carusal from "../Carousal/Carusal";
import foundation from "../../Sources/Images/foundation.png";
import "./Home.css";
import Timer from "../Timer/Timer";
import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import cookies from "js-cookie";
// import classNames from "classnames";

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    // dir: "rtl",
    country_code: "ly",
  },
];

// const GlobeIcon = () => (
//   <i style={{ fontSize: "xx-large" }} className="fa-solid fa-earth-africa"></i>
// );
function Home({ pargaph }) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);
  return (
    <div>
      <Carusal />
      <div className="home-partimer">
        <div className="divs">
          <div>
            <h2 style={{ textAlign: "left", fontSize: "xxx-large" }}>
              {t("About the city of Tajoura")}
            </h2>{" "}
            <h5 style={{ width: "1100px", textAlign: "left" }}>
              {t("text1")}
              {t("text2")}
              {t("text5")}
              {t("text6")}
              {t("text7")}
              {/* Tajoura is a coastal city located in the east of the Libyan
              capital, Tripoli, 21 kilometers from the center of Tripoli. It is
              bordered on the west by the Friday market, on the east by the city
              of Al-Qarabouli, and on the north by the Mediterranean Sea, on the
              south by Qasr Bin Ghashir.
              <br /> The name Tajoura goes back to very old periods, and the
              name Tajoura goes back to the Berber language and means the gate.
              The reason for the name is that this city was the eastern gate to
              the walls of Tripoli, the west <br /> Tajoura was formed with the
              formation of Tripoli or former Oia since the Phoenician era, and
              there are still Phoenician monuments east of Tajoura in the Ghout
              al-Rumman area and a Roman one, and antiquities are still being
              discovered one after the other, but all the discoveries did not
              come as a result of scientific excavation or determining a
              temporal age for it, but rather discovered by the residents by
              chance and they turned to Neglect and vandalism prevalent in the
              era of Muammar Gaddafi's rule. The oldest Islamic monument in
              Tajoura is the “Ahmid Palace” and many of the people of Tajoura do
              not know it. Hamid is one of the Arabs who migrated from the
              Arabian Peninsula. The date of construction dates back to the
              third century after the migration, but it was abandoned and turned
              into ruins, so some old benefactors restored it and established it
              as a corner for memorizing the Holy Quran In the name of "Zawiyat
              Al Qasr", which continued until the late nineties of the twentieth
              century AD, and then was demolished! It was an empty land. Then
              Tajoura became famous after that at the time of the Spanish
              occupation of Tripoli in 1510. Most of the people of Tripoli fled
              to Tajoura to escape from the oppression of the Spaniards and to
              build a base for jihad against the Spaniards and the liberation of
              Tripoli. Until the year 1530, the Spaniards handed Tripoli over to
              the Knights of St. John or the Knights of Malta, so they built a
              fortress Tripoli, the Red Saraya, and the Spaniards had begun
              building it before them. In 1551 AD, a delegation of the sons of
              Tripoli traveled to Istanbul, appealing to the Ottoman Sultan “the
              Caliph” to rescue them from the aggression of the Knights of
              Malta. The elder is with the people while he is buried next to
              him. After that, he appointed Sheikh Abu Rawi, the grandson of
              Sheikh Abd al-Salam al-Asmar, the sheikh of the zawiya, which is
              currently known as the “Abi Rawi zawiya.” Al-Din Barbarossa then
              launched separate naval raids to protect Mara Agha in Tajoura, and
              Darghouth sailed to Tripoli and landed in Tajoura. Filling it with
              dirt and lighting a candle or lamp inside it, then leaving it in
              the sea so that the Crusaders think that the dishes are the lights
              of the Ottoman fleet, and at that time only 15 ships were with
              him. After that, Murad Agha opened it with its people and hired
              his ground forces. And Tajoura is the first area to rise up on
              20/8 (the liberation of Tripoli), as well as the first area to get
              rid of Gaddafi's forces <br /> Tajoura is still remembered by the
              Libyans for the stances and men it presented to the country. There
              is no elderly person in Libya, a student of science or the Qur’an
              who does not know the corner of “Sidi Abu Rawi” and its
              educational services for the people of Tajoura and others. May God
              reward us with good in that beautiful time.
              <br /> In Tripoli, there is the Bab Tajoura area located between
              the Nofalians and the Al-Hani area in Abu Sitta, in relation to
              one of the gates of Tripoli overlooking Tajoura, which is the
              place of the island of Bab Tajoura. Which is known as the Friday
              market area in Tripoli now.
              <br /> Tajoura and its position on the February 17 revolution: The
              residents of Tajoura are more important than the first to stand
              against the tyrant of the era (Muammar al-Qaddafi) by supporting
              the revolution by all means, both material and moral, until they
              obtained weapons by sea with the help of the revolutionaries of
              al-Qarabuli (the neighboring town) and with it Tripoli was
              liberated by participation With the rest of its residents on
              20/8/2011 AD */}
            </h5>
          </div>
        </div>

        <div className="countdiv">
          <div className="counterbuttons">
            <img
              src={foundation}
              alt="Challenge"
              style={{ height: "300px", borderRadius: "50%" }}
            />
            <h2>{t("text3")}</h2>
            <h3>{t("text4")}</h3>
            <Timer />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
