import Mock from './mock'

import './db/auth'
import './db/invoice'
import './db/calendarEvents'
import './db/users'
import './db/chat'
import './db/notification'

Mock.onAny().passThrough()
