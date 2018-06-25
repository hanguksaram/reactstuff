'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//stateless functional component

var obj = {
  some: 1,
  petya: function petya() {
    return this.some;
  }
};

var wtf = function wtf() {
  return obj.petya();
};

console.log(wtf.petya);

var MyApp = function (_React$Component) {
  _inherits(MyApp, _React$Component);

  function MyApp(props) {
    _classCallCheck(this, MyApp);

    var _this = _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      var options = JSON.parse(json);
      if (options !== null) this.setState(function () {
        return { options: options };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('component will unmount');
    }
  }, {
    key: 'removeOption',
    value: function removeOption(option) {
      console.log("BFF");
      this.setState(function (prevState) {
        return { options: prevState.options.filter(function (elem) {
            return elem != option;
          }) };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {

      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var subtitle = 'Put ya life in the hands of computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick }),
        React.createElement(Options, {
          removeOption: this.removeOption,
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return MyApp;
}(React.Component);

MyApp.defaultProps = {
  options: []
};
var Header = function Header(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};
Header.defaultProps = {
  title: 'Indecision'
};
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    React.createElement(
      'p',
      null,
      props.options.length
    ),
    props.options.map(function (elem, index) {
      return React.createElement(Option, { key: index, option: elem, removeOption: props.removeOption });
    })
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleSubmitForm = _this2.handleSubmitForm.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleSubmitForm',
    value: function handleSubmitForm(e) {
      console.log(e);
      e.preventDefault();
      var option = e.target.elements.option.value;
      if (option) {
        this.props.handleAddOption(option);
      }
      console.log(option);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleSubmitForm },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { className: 'button' },
            'Submit'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function Option(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      props.option,
      React.createElement(
        'button',
        {
          onClick: function onClick(e) {
            props.removeOption(props.option);
          } },
        'del'
      )
    )
  );
};

var Action = function Action(props) {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !props.hasOptions },
      'What should i Do'
    )
  );
};

// class Action extends React.Component {

// }
var jsx = React.createElement('div', null);
ReactDOM.render(React.createElement(MyApp, null), document.getElementById("app"));
