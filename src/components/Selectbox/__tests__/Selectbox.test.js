import Selectbox from '..';

const optionsMock = [
  { value: '', label: 'Select' },
  { value: 'LowPrice', label: 'Lowest to highest' },
  { value: 'HighPrice', label: 'Highest to lowest' }
];

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Selectbox options={optionsMock} handleOnChange={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('mount with 3 option element', () => {
  expect(wrapped.find('option').length).toEqual(3);
});
