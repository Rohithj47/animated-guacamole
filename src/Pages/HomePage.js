import { useEffect, useState } from "react";
import useQuestionStore from "../store/questionStore";
import QuestionCard from "../Components/QuestionCard";
import useUserStore from "../store/userStore";
import { Link } from "react-router-dom";

const HomePage = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);
  const questions = useQuestionStore((state) => state.questions);
  const user = useUserStore((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");

  if (!user) {
    //TODO: navigate to signup page
  }

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  //TODO: filter questions based on search string

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Questions</h1>
        {user && (
          <Link to="/profile">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </Link>
        )}
      </div>
      <input
        type="text"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
