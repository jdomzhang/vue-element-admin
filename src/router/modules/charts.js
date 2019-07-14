/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

import keyboardComp from '@/views/charts/keyboard'
import lineComp from '@/views/charts/line'
import mixChartComp from '@/views/charts/mix-chart'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => keyboardComp,
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => lineComp,
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => mixChartComp,
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    }
  ]
}

export default chartsRouter
