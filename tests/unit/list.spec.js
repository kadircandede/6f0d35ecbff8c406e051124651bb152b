import { mount } from '@vue/test-utils'
import list from '@/components/list/index.vue'


describe('list/index.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(list, {
      methods: { getData: () => {}}
    })
  })
  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  })

  test('card', () => {
    wrapper = mount(list)

    expect(wrapper.findComponent({ name: 'Card' }).exists())
  })
})
