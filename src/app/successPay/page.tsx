import { Button } from 'components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <p>Order Placed Successfully!</p>
        <Link href="/allprod"><Button>Continue Shopping</Button></Link>
    </div>
  )
}

export default page