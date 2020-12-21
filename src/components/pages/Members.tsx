import React, { FC, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Divider } from 'semantic-ui-react'
import { capitalize } from 'lodash'
import HomeButton from 'components/molecules/HomeButton'
import Spinner from 'components/molecules/Spinner'
import ErrorBoundary from 'ErrorBoundary'
import MemberList from 'containers/organisms/MemberList'

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
      <HomeButton />
    </>
  )
}

export default Members
