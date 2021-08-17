import { mount } from 'enzyme';
import Hello from '../Hello';

it('test render', () => {
    const mounted = mount(<Hello />);
    expect(mounted.contains(<h1>hello_world</h1>)).toBe(true);
});
