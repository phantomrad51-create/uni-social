export default function RulesPage() {
  return (
    <div className="min-h-screen app-bg p-6">
      <div className="max-w-2xl mx-auto">
        <div className="app-surface border app-border rounded-2xl p-8">
          <h1 className="text-2xl font-bold app-text mb-2">Sunway Connect Community Rules</h1>
          <p className="app-text-muted text-sm mb-8">Last updated: May 2026. By using Sunway Connect you agree to these rules.</p>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold app-text mb-2">1. Respect Everyone</h2>
              <p className="app-text-muted text-sm">Treat all members with respect. Harassment, bullying, hate speech, and personal attacks are not tolerated. This includes targeting someone based on their race, gender, religion, nationality, or sexual orientation.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">2. No Spam or Advertising</h2>
              <p className="app-text-muted text-sm">Do not post spam, chain messages, or unsolicited advertisements. Promoting products, services, or external platforms without permission is not allowed.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">3. No NSFW Content</h2>
              <p className="app-text-muted text-sm">Do not post sexually explicit, graphic, or disturbing content. This is a university platform and must remain appropriate for all students.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">4. No Doxxing</h2>
              <p className="app-text-muted text-sm">Do not share anyone's personal information without their consent. This includes home addresses, phone numbers, student IDs, or any other private details.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">5. No Misinformation</h2>
              <p className="app-text-muted text-sm">Do not spread false information, fake news, or misleading content, especially regarding university events, policies, or other students.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">6. No Impersonation</h2>
              <p className="app-text-muted text-sm">Do not pretend to be another student, staff member, or university official. Creating fake profiles is strictly prohibited.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold app-text mb-2">7. Consequences</h2>
              <p className="app-text-muted text-sm">Violations may result in warnings, temporary mutes, or permanent bans depending on severity. Serious violations may be reported to university authorities.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t app-border">
            <p className="text-xs app-text-muted">If you see a violation, use the Report button on any post. For serious issues contact the admins directly.</p>
          </div>
        </div>
      </div>
    </div>
  )
}