import Head from 'next/head'
import AV from 'leancloud-storage'
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
import Layout from 'src/components/www/Layout'

function MyComponent () {
  const [profile, setprofile] = useState(null)
  const [userinfo, setuserinfo] = useState(null)

  return (
    <Layout
      onChange={(params) => {
        setprofile(params.profile)
        setuserinfo(params.userinfo)
      }}
    >
      <div className={styles.container}>
        <p className={styles.title}>Oh My Blog</p>
        <p className={styles.desc}>
          ✍️📑：A simple and fast blog framework based on leancloud.
        </p>
        <div className={styles.groups}>
          {profile && (
            <a href={profile.github} target="_blank" className={styles.link}>
              <i className="iconfont icon-github"></i>
              Github
            </a>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default MyComponent
