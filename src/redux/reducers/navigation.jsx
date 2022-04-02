import React from 'react'
import {
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiMap,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
  FiHome
} from 'react-icons/fi'

const initialState = [
  {
    title: 'PPDB Online',
    items: [
      {
        url: '/dashboard',
        icon: <FiCompass size={20} />,
        title: 'Dashboard',
        items: []
      },
      {
        url: '/data-dokumen',
        icon: <FiDroplet size={20} />,
        title: 'Data Dokumen',
        items: []
      },
       {
        url: '/list-sekolah',
        icon: <FiGrid size={20} />,
        title: 'Daftar Sekolah',
        items: []
      }, {
        url: '/hasil-seleksi',
        icon: <FiList size={20} />,
        title: 'Hasil Seleksi',
        items: []
      }
    ]
  }
]

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
