
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  
  if (!user) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="text-muted-foreground">Here's your planning dashboard</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Recent Chats</CardTitle>
            <CardDescription>Your conversations with Daily Muse</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4">You haven't had any recent conversations.</p>
            <Link to="/chat">
              <Button className="w-full" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" /> Start New Chat
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Today's Schedule</CardTitle>
            <CardDescription>Your planned activities for today</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm mb-4">No scheduled activities for today.</p>
            <Button className="w-full" variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> Create Schedule
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Productivity Tips</CardTitle>
            <CardDescription>Personalized recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Clock className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                <span>Try time blocking your calendar for focused work periods</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                <span>Schedule breaks every 90 minutes to maintain productivity</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                <span>Plan your most important tasks for your peak energy hours</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Calendar className="h-6 w-6 mb-2" />
                <span>Create Daily Plan</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <MessageSquare className="h-6 w-6 mb-2" />
                <span>Ask Planning Question</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Clock className="h-6 w-6 mb-2" />
                <span>Set Reminder</span>
              </Button>
              <Button variant="outline" className="h-auto py-6 flex flex-col items-center justify-center">
                <Calendar className="h-6 w-6 mb-2" />
                <span>Weekly Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle>Get More from Daily Muse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Enhance your planning experience with these features:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Custom Templates</h3>
                  <p className="text-sm text-muted-foreground mb-2">Create personalized planning templates for recurring activities.</p>
                  <Button size="sm" variant="outline">Coming Soon</Button>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Calendar Integration</h3>
                  <p className="text-sm text-muted-foreground mb-2">Connect your favorite calendar apps for seamless scheduling.</p>
                  <Button size="sm" variant="outline">Coming Soon</Button>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-2">Track your productivity patterns with detailed insights.</p>
                  <Button size="sm" variant="outline">Coming Soon</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
