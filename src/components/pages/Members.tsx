import React, { FC, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Divider } from 'semantic-ui-react'
import HomeButon from 'components/molecules/HomeButtons'
import Spinner from 'components/molecules/Spinner'
import MemberList from 'containers/organisms/MemberList'
import { capitalize } from 'lodash'
import ErrorBoundary from 'ErrorBoundary'

const Members: FC<{ orgCode: string }> = ({ orgCode = 'UnknownCompany' }) => {
  const title = `${capitalize(orgCode)} の開発メンバー`

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header className="app-header">
        <h1>{title}</h1>
      </header>
      <ErrorBoundary
        statusMessages={{
          404: `'${orgCode}' というコードの組織は見つかりません`,
        }}
      >
        <Suspense fallback={<Spinner size="big" />}>
          <MemberList orgCode={orgCode} />
        </Suspense>
      </ErrorBoundary>
      <Divider hidden />
      <HomeButon />
    </>
  )
}

export default Members
