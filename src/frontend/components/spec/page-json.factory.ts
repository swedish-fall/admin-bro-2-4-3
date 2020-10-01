import factory from 'factory-girl'
import PageJSON from '../../../backend/decorators/page-json.interface'

factory.define<PageJSON>('PageJSON', Object, {
  name: factory.sequence('PageJSON.name', n => `page${n}`),
  component: factory.sequence('PageJSON.component', n => `Component${n}`),
})