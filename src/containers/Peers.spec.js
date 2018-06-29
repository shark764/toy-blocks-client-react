import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedPeers, { Peers } from "./Peers";
import Peer from "../components/Peer";
import initialState from "../reducers/initialState";

describe("<Peers />", () => {
  const actions = {
    checkPeerStatuses: jest.fn()
  };

  it("should contain <Peer />", () => {
    const wrapper = shallow(
      <Peers
        actions={actions}
        peers={initialState.peers}
      />
    );

    expect(wrapper.find(Peer).length).toEqual(4);
  });

  // it("calls saveFuelSavings upon clicking save", () => {
  //   const wrapper = mount(
  //     <FuelSavingsPage
  //       actions={actions}
  //       fuelSavings={initialState.fuelSavings}
  //     />
  //   );
  //
  //   const save = wrapper.find('input[type="submit"]');
  //   save.simulate("click");
  //
  //   expect(actions.saveFuelSavings).toHaveBeenCalledWith(
  //     initialState.fuelSavings
  //   );
  // });
  //
  // it("calls calculateFuelSavings upon changing a field", () => {
  //   const wrapper = mount(
  //     <FuelSavingsPage
  //       actions={actions}
  //       fuelSavings={initialState.fuelSavings}
  //     />
  //   );
  //   const name = "newMpg";
  //   const value = 10;
  //
  //   const input = wrapper.find('input[name="newMpg"]');
  //   input.simulate("change", { target: { name, value } });
  //
  //   expect(actions.calculateFuelSavings).toHaveBeenCalledWith(
  //     initialState.fuelSavings,
  //     name,
  //     value
  //   );
  // });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedPeers />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
