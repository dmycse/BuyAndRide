import Link from 'next/link';

export default function PaymentErrorPage() {
  return (
    <section>
      <div className="custom-container h-screen flex-center flex-col gap-4">
        <h3 className='text-center'>Something went wrong!</h3>
        <h3 className='text-center'>Your payment was not successful.</h3>
        <Link href="/" className='btn btn-accent'>Back to homepage</Link>
      </div>
    </section>
  )
}
