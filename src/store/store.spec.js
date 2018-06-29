import * as ActionTypes from '../constants/actionTypes';

import configureStore from './configureStore';

describe('Store', () => {
  // let dateModified;

  const peers = {
    list: [
      { url: 'a.com', online: false, name: null, loading: false },
      { url: 'b.com', online: false, name: null, loading: false },
      { url: 'c.com', online: false, name: null, loading: false },
      { url: 'd.com', online: false, name: null, loading: false }
    ]
  };

  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary data is provided', () => {
    const store = configureStore({peers});

    const actions = [
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[0], res: {node_name: 'alpha'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[1], res: {node_name: 'beta'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[0], res: {node_name: 'gamma'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[2], res: {node_name: 'delta'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[1], res: {node_name: 'epsilon'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[0], res: {node_name: 'zeta'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[0], res: {node_name: 'eta'} },
      { type: ActionTypes.CHECK_PEER_STATUS_SUCCESS, peer: peers.list[0], res: {node_name: 'theta'} },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      list: [
        { url: 'a.com', online: true, name: 'theta', loading: false },
        { url: 'b.com', online: true, name: 'epsilon', loading: false },
        { url: 'c.com', online: true, name: 'delta', loading: false },
        { url: 'd.com', online: false, name: null, loading: false }
      ]
    };

    expect(actual.peers).toEqual(expected);
  });

  // it('should not display results when necessary data is not provided', () => {
  //   const store = configureStore();
  //
  //   const actions = [
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
  //     // { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' }
  //   ];
  //
  //   actions.forEach(action => store.dispatch(action));
  //
  //   const actual = store.getState();
  //
  //   const expected = {
  //     newMpg: 20,
  //     tradeMpg: 10,
  //     newPpg: '',
  //     tradePpg: 1.5,
  //     milesDriven: 100,
  //     milesDrivenTimeframe: 'month',
  //     displayResults: false,
  //     dateModified,
  //     necessaryDataIsProvidedToCalculateSavings: false,
  //     savings: { annual: 0, monthly: 0, threeYear: 0 }
  //   };
  //
  //   expect(actual.fuelSavings).toEqual(expected);
  // });


  // it('should handle a flurry of actions', () => {
  //   const store = configureStore();
  //
  //   const actions = [
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'month' },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 },
  //     { type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified, settings: store.getState() },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 1.50 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'week' },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newMpg', value: 20 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradeMpg', value: 10 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'newPpg', value: 1.50 }
  //   ];
  //   actions.forEach(action => store.dispatch(action));
  //
  //   calculateSavings(store.getState().fuelSavings);
  //
  //   const moreActions = [
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'tradePpg', value: 0 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDriven', value: 100 },
  //     { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: store.getState(), fieldName: 'milesDrivenTimeframe', value: 'year' }
  //   ];
  //
  //   moreActions.forEach(action => store.dispatch(action));
  //
  //   const actual = store.getState();
  //   //const expected = {
  //   //  newMpg: 20,
  //   //  tradeMpg: 10,
  //   //  newPpg: 1.50,
  //   //  tradePpg: 0,
  //   //  milesDriven: 100,
  //   //  milesDrivenTimeframe: 'year',
  //   //  displayResults: false,
  //   //  dateModified,
  //   //  necessaryDataIsProvidedToCalculateSavings: false,
  //   //  savings: lastGoodSavings
  //   //};
  //   //
  //   //expect(actual.fuelSavings).toEqual(expected);
  //
  //   // with jest snapshots the above assertion can be replaced with this one line
  //   // jest will store the value in a file within ./__snapshots__
  //   // snapshots can/should be committed and reviewed
  //   // jest will also update snapshot or delete unused ones using the command `npm run test -- -u`
  //   expect(actual.fuelSavings).toMatchSnapshot();
  // });
});
