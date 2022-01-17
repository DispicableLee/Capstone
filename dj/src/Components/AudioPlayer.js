import ReactAudioPlayer from "react-audio-player";
export default function AudioPlayer(props) {
    //need to select file from file folder
    //need to implement

    return (
      <div class="music-container">
        {/* contains audio player */}
        <div class="music-info">
          {/*contains music information*/}
          <h4 id="title"> {/*name of song goes here*/}hi </h4>
          <div class="progress-container">
            <div class="progress"></div>
          </div>
        </div>
        
        <div class="img-cntnr">
          image container
          <img />
        </div>
        {/* acual audio player goes below */}
        <ReactAudioPlayer controls/>
      </div>
    );
  }
  