export const styleInLine = `
<style>
* {
    font-family: Roboto, sans-serif;
  }
  .block-description {
    position: absolute;
    left: 25px;
    top: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .block-description > h6 {
    font-size: 18px;
    color: var(--iq-white-color);
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .block-description > h6 > a {
    text-decoration: none;
    color: #d8d0cf;
  }
  .actions {
    position: absolute;
    right: 25px;
    top: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .btnPlay {
    background-color: #e50914;
    text-align: center;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  .title {
    width: fit-content;
  }
  .title > a {
    font-weight: bold;
    font-size: 18px;
  }
  .title > a:hover {
    cursor: pointer;
    color: #e50914;
    transition: 1s;
  }
  .componen:hover {
    transform: translateX(20px) scale(1.1);
    transition: 1s;
  }
  .componen:hover .img {
    filter: brightness(50%);
    transition: 1s;
  }
  .btnPlay:hover,
  .btnPlay:focus {
    cursor: pointer;
    box-shadow: inset -5em 0 0 0 #bf000a, inset 5em 0 0 0 #bf000a;
    transition: 0.6s;
  }
  /* actions */
  .actions {
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0;
    right: 25px;
    z-index: 999;
    display: flex;
    align-items: center;
    opacity: 0;
    width: 40px;
  }
  .componen:hover .actions {
    opacity: 1;
    transition: 1s;
  }
  .actions .music-play-lists li {
    height: 40px;
    width: 40px;
  }
  .music-play-lists li {
    position: relative;
    height: 30px;
    width: 30px;
    line-height: 35px;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin: 5px auto;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -o-display: flex;
    align-items: center;
  }
  .music-play-lists span {
    position: relative;
    height: 30px;
    width: 30px;
    line-height: 26px;
    font-size: 12px;
    text-align: center;
    background: white;
    color: #e50914;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .music-play-lists span:hover {
    background: #e50914;
    color: white;
    transition: 0.6s;
  }
  .music-play-lists .count-box {
    position: absolute;
    height: 15px !important;
    width: 15px !important;
    line-height: 15px i !important;
    font-size: 8px !important;
    background: #e50914 !important;
    color: white !important;
    right: 0;
    top: 0px;
    padding: 0;
    text-align: center !important;
  }
  .share-box {
    display: none;
    position: absolute;
    width: max-content;
    top: 3px;
    right: 40px;
    left: auto;
    background-color: #191919;
    padding: 0px 5px;
    border-radius: 0px;
    text-align: center;
    z-index: 2;
  }
  .share:hover .share-box {
    display: inline-block;
  }
  .share-box a {
    text-align: center;
    color: white;
    margin: 0 5px;
  }
  .share-box i:hover {
    text-decoration: unset;
    color: #e50914;
    transition: 0.6s;
  }
</style>
`;
