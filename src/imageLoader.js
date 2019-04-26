import Images from './img/images';

const loadImage = (key, data) => {
  const img = new Image();
  img.src = data[key];
};

export default () => {
  loadImage('main', Images);
  Object.keys(Images.circuits).forEach(key => loadImage(key, Images.circuits));
  Object.keys(Images.drivers).forEach(key => loadImage(key, Images.drivers));
  Object.keys(Images.teams).forEach(key => loadImage(key, Images.teams));
  Object.keys(Images.teams_big).forEach(key => loadImage(key, Images.teams_big));
};
