import ReposContainer from '../src/containers/ReposContainer';

jest.unmock('../src/containers/ReposContainer');

describe('ReposContainer', () => {
    describe('mapStateToProps', () => {
        const mapStateToProps = ReposContainer.__get__('mapStateToProps');

        it('Returns object with 1 property', () => {
            const state = {};
            const stateProps = mapStateToProps(state);
            const numberOfKeys = Object.keys(stateProps).length;

            expect(numberOfKeys).toBe(0);
        });
    });
});
