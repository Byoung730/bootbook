import ReposComponent from '../src/components/ReposComponent';
import {ReposRecord} from '../src/reducers/repos';
import {shallow} from 'enzyme';
import React from 'react';

jest.unmock('../src/components/ReposComponent');
jest.unmock('../src/reducers/repos');

describe('ReposComponent', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ReposComponent repos={new ReposRecord()} />);
    });

    it('Default view is empty', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
