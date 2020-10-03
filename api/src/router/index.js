const router = require('express').Router();

router.get('/status', (req, res) => {
  res.send({ status: 'online' });
});

router.get('/weather', (req, res) => {
  const {
    query: { city },
  } = req;

  if (!city) {
    return res.send({ Message: 'the city parameter is required' });
  } else {
    let cities = city.split(',');
    const data = [];
    for (let index = 0; index < cities.length; index++) {
      const element = cities[index];
      const temp = Number((Math.random() * (40 - 15) + 15).toFixed(2));
      const temp_max = (Math.random() * (40 - temp) + temp).toFixed(2);
      const temp_min = (Math.random() * (temp_max - 15) + 15).toFixed(2);
      const humidity = (Math.random() * (100 - 15) + 15).toFixed(2);
      const pressure = (Math.random() * (1012 - 997) + 997).toFixed(2);

      data.push({
        name: element,
        main: {
          temp,
          temp_max,
          temp_min,
          humidity,
          pressure,
        },
      });
    }
    res.send(data);
  }
});

module.exports = router;
