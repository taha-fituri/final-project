import React from "react";
import Sport from "../../Sources/Images/Sport.jpg";
import Tourism from "../../Sources/Images/Tourism.jpg";
import "./Footer.css";
function About() {
  return (
    <div style={{ margin: "6% 0 0 2%" }}>
      <div className="sportdiv">
        <div style={{ width: "200px" }}>
          <h2
            style={{
              textAlign: "left",
              fontSize: "xxx-large",
              marginLeft: "1%",
            }}
          >
            Tourism
          </h2>
          <h5 style={{ width: "1100px", textAlign: "left" }}>
            There is a lot of talk about the tourist resources of Tajoura, with
            a lot of resources, in addition to the famous Tajoura beach, which
            has tourist villages, most of which were demolished, and only one
            resort remains, which is the “Tourist Village of Tajoura, 32 km from
            Tripoli. There are forests "Boscoat" which are good places to spend
            holidays and relax in them due to the beautiful Mediterranean
            climate Tajoura enjoys. There is also the “land” countryside, where
            tourist authorities can build resorts and hotels, thus contributing
            to the eradication of desertification, which is currently caused by
            cutting down trees and depleting groundwater. There are also
            antiquities, as once the Ministry of Antiquities pays attention to
            them and begins excavating about the discoveries by chance, this
            will represent an excellent resource for tourism in Tajoura in
            particular, Tripoli and Libya in general. There is religious tourism
            for the presence of old mosques, corners and shrines.
          </h5>
        </div>
        <img
          src={Tourism}
          alt="Tourism"
          style={{ height: "250px", width: "300px", borderRadius: "50%" }}
        />
      </div>
      <div className="sportdiv">
        <div style={{ width: "300px" }}>
          <h2
            style={{
              textAlign: "left",
              fontSize: "xxx-large",
              marginLeft: "1%",
            }}
          >
            Sports
          </h2>
          <h5 style={{ width: "1100px", textAlign: "left" }}>
            {" "}
            Football is famous in Tajoura, as it is also predominant in Libya,
            and Tajoura includes several clubs: Al-Tahrir Club was founded in
            1952 and is one of the oldest clubs in Libya. Its first location was
            in Al-Hattab Street, then moved to Al-Shat Road. My father's club.
            Relative to the neighborhood in which it is located. The club's
            headquarters in Spain was demolished in the mid-nineties for unknown
            reasons and the club is currently without an official headquarters.
            Hamidiya Club. Walking club. Puppy Belly Club. The people of Tajoura
            prefer to play their matches on the dirt in their yards or sandy
            squares, but this method is on the way to disappear with the wave of
            construction and the construction of grassy and asphalt stadiums.
            There is a presence of beach volleyball and training centers for
            karate and taekwondo. Other sports are not very popular in Tajoura
            due to the lack of facilities.
          </h5>
        </div>
        <img
          src={Sport}
          alt="Sport"
          style={{ height: "250px", width: "300px", borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}

export default About;
