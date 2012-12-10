# lilmvc

A li'l mvc framework

## Usage

load dist/lilmvc.js or dist/lilmvc.min.js in you browser and call it like this:

```javascript
(function () {

  var mvc = require('lilmvc');

  var beerModel = mvc.model.extend({

    defaults: {
      isOpen: false
    },

    rules: {
      name: ['required', 'string']
      isOpen: ['required', 'boolean']
    }
    
    open: function () {
      this.isOpen = true;
    }

  });
  
  var beerView = mvc.view.extend({
    
    init: function (bus) {
      
      bus.on(bus.ev.LOAD_BEER, this.render.bind(this));
      this.el.on('click', '.opener', this.open.bind(this, bus));
      
    },
    
    render: function (beer) {
      
      var beerHtml = this.template('beer-template', { beer: beer });
      this.el.html(beerHtml);
      
    },
    
    open: function (bus, ev) {
      
      var name = this.$(ev.target).siblings('label').text();
      bus.emit(bus.ev.BEER_OPEN, name);
      
    }
    
  });

  var beerController = mvc.controller.extend({
    
    events: [
      'LOAD_BEER',
      'OPEN_BEER'
    ],
    
    init: function (bus) {
      
      bus.on(bus.ev.OPEN_BEER, this.open.bind(this));
      
      var dunkelBeer = beerModel.create({ name: 'dunkel' });
      bus.emit(bus.ev.LOAD_BEER, dunkelBeer);
      
    }
    
    open: function (name) {
      
      var beer = beerModel.create({ name: name });
      beer.open();
      //enjoy
      
    }
    
  }); 

  beerController.create({
    '#cuzi': beerView
  });

}());
```

## Documentation
_(Coming soon)_

## License
Copyright (c) 2012 August Hovland
Licensed under the MIT license.
