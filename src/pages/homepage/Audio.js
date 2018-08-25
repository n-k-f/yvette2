import React from 'react'


 const Release = ({
    albumName,
    artwork,
    releaseDate,
    soundCloudLink,
    spotifyLink,
    iTunesLink
  }) => {
    return (
      <div>
        <img src={artwork}/>
        
        <h3>{albumName}</h3>
        <time>{releaseDate}</time>
        
        <div>
          {soundCloudLink}
        </div>
        <div>
          <a href={spotifyLink}>Spotify</a>
          <a href={iTunesLink}>iTunes</a>
        </div>
      </div>
    )
  }
  
  const Audio = ({ releases }) => {
    return (
      <div>
        {releases.map(release => {
          return (
            <Release
                albumName={release.albumName}
                artwork={release.artwork}
                releaseDate={release.releaseDate}
                soundCloudLink={release.soundCloudLink}
                spotifyLink={release.spotifyLink}
                iTunesLink={release.iTunesLink}
            />
          )
        })
      }
      </div>
    )
  }

  export default Audio