import ReactAudioPlayer from "react-audio-player";
export default function AudioPlayer(props) {
    //need to select file from file folder
    //need to implement

    return (
      <div className="music-container">
        {/* contains audio player */}
        <div className="music-info">
          {/*contains music information*/}
          <h4 id="title"> {/*name of song goes here*/}hi </h4>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>
        
        <div className="img-cntnr">
          image container
          <img />
        </div>
        {/* acual audio player goes below */}
        <ReactAudioPlayer controls/>
      </div>
    );
  }
  