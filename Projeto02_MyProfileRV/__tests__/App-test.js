import 'react-native';
import React from 'react';
import App from '../src/pages/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders the profile image', () => {

  const profileImage = renderer.create('img');

  expect(profileImage).toMatchSnapshot();
});

it('renders texts at app', () => {

  const profileText = renderer.create('text');

  expect(profileText).toMatchSnapshot();
});

it('renders buttons at app', () => {

  const profileButtons = renderer.create('button');

  expect(profileButtons).toMatchSnapshot();
});

it('renders modals at app', () => {

  const profileModal = renderer.create('modal');

  expect(profileModal).toMatchSnapshot();

});
