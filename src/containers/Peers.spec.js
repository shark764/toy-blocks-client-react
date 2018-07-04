import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedPeers, { Peers } from "./Peers";
import Peer from "../components/Peer";

describe("<Peers />", () => {
  const actions = {
    checkPeerStatuses: jest.fn()
  };

  const peers = {
    list: [
      {
        url: 'https://thawing-springs-53971.herokuapp.com',
        online: false,
        name: 'Node 1',
        loading: false
      },
      {
        url: 'https://secret-lowlands-62331.herokuapp.com',
        online: false,
        name: 'Node 2',
        loading: false
      }
    ]
  };

  it("should contain <Peer />", () => {
    const wrapper = shallow(
      <Peers
        actions={actions}
        peers={peers}
      />
    );

    expect(wrapper.find(Peer).length).toEqual(2);
  });

  it("should match snapshot", () => {
    const middlewares = [thunk];
    const store = configureMockStore(middlewares)({peers});
    const component = create(
      <Provider store={store}>
        <ConnectedPeers />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
