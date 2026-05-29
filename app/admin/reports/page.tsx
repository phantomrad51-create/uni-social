"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function ReportsPage() {
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      setCurrentUser(user)
      const { data } = await supabase
        .from("reports_with_details")
        .select("*")
        .order("created_at", { ascending: false })
      if (data) setReports(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  const hidePost = async (postId: string) => {
    const supabase = createClient()
    await supabase.from("posts").update({ hidden: true }).eq("id", postId)
    setReports(prev => prev.map(r => r.post_id === postId ? { ...r, post_hidden: true } : r))
  }

  const warnUser = async (userId: string, postId: string, reason: string) => {
    const supabase = createClient()
    await supabase.from("warnings").insert({
      user_id: userId,
      reason,
      post_id: postId,
      issued_by: currentUser?.id,
    })
    alert("Warning issued successfully.")
  }

  if (loading) return <div className="p-6 app-text">Loading reports...</div>

  return (
    <div className="min-h-screen app-bg p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold app-text">Reports Dashboard</h1>
          <a href="/admin" className="text-sm app-text-muted hover:opacity-80">← Back to Admin</a>
        </div>
        {reports.length === 0 ? (
          <p className="app-text-muted">No reports yet.</p>
        ) : (
          <div className="space-y-4">
            {reports.map((report: any) => (
              <div key={report.id} className="app-surface border app-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">{report.category}</span>
                  <span className="text-xs app-text-muted">{new Date(report.created_at).toLocaleString()}</span>
                </div>
                <p className="text-sm app-text mb-1"><span className="app-text-muted">Post:</span> {report.post_content ?? "Deleted"}</p>
                <p className="text-sm app-text mb-1"><span className="app-text-muted">Author:</span> {report.author_name ?? "Unknown"}</p>
                <p className="text-sm app-text mb-3"><span className="app-text-muted">Reported by:</span> {report.reporter_name ?? "Unknown"}</p>
                <div className="flex gap-2 flex-wrap">
                  {report.post_hidden ? (
                    <span className="text-xs text-green-400 font-medium">Post already hidden</span>
                  ) : (
                    <button onClick={() => hidePost(report.post_id)}
                      className="text-xs bg-red-500 text-white px-3 py-1.5 rounded-lg hover:opacity-80">
                      Hide Post
                    </button>
                  )}
                  <button onClick={() => warnUser(report.post_author_id, report.post_id, `Your post was reported for: ${report.category}`)}
                    className="text-xs bg-orange-500 text-white px-3 py-1.5 rounded-lg hover:opacity-80">
                    Warn User
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}