//Setup @testing-library/react for importing intellisense
import "@testing-library/react";

//Setup jest-dom matchers as globals
import "@testing-library/jest-dom";

//Setup is react act environment true for tests
//@ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
