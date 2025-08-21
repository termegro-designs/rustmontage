import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, Telefon und E-Mail sind erforderlich' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      )
    }

    console.log('Kontaktanfrage erhalten:', {
      name,
      phone,
      email,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    const emailContent = `
Neue Kontaktanfrage von der Rustmontage Website:

Name: ${name}
Telefon: ${phone}
E-Mail: ${email}
Gewünschte Leistung: ${service || 'Nicht angegeben'}

Nachricht:
${message || 'Keine Nachricht'}

Zeitstempel: ${new Date().toLocaleString('de-AT')}
    `.trim()

    console.log('E-Mail-Inhalt würde gesendet werden:', emailContent)

    return NextResponse.json({
      success: true,
      message: 'Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen!'
    })

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error)
    
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}