let path = require("path")
let { initComponent, createTestSandbox } = require( 'marko-jest/test-utils');

describe(__dirname, () => {

  const componentClass = initComponent(path.resolve(__dirname, './index.marko'));

  let testSandbox;
  let component;
  beforeEach(() => {
    testSandbox = createTestSandbox();
  });

  afterEach(() => {
    testSandbox.reset();
  });

  describe('on rendering', () => {
    beforeEach(() => {
      // render component to sandbox
      return testSandbox
        .renderComponent(componentClass, {})
        .then(result => {
          component = result;
        });
    });

    it('should render a link given default input', () => {
      const button = component.el.querySelector("button");
      // console.log("!!!!!!!!!!!!!!!!!!!!")
      // console.log(button.innerHTML)
      button.click()
      button.click()
      console.log(component.state.count)
    });

  });
});