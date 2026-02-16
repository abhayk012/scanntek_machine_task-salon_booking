import React, { useState } from "react";
import { Star, Send, User } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";
import type { Review } from "@/types";
import { getReviewsByStylist } from "@/data/mockData";

interface StaffReviewsProps {
  stylistId: string;
  stylistName: string;
}

const StaffReviews: React.FC<StaffReviewsProps> = ({
  stylistId,
  stylistName,
}) => {
  const [reviews, setReviews] = useState<Review[]>(
    getReviewsByStylist(stylistId),
  );
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !comment.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newReview: Review = {
        id: Math.random().toString(36).substr(2, 9),
        stylistId,
        customerName: "Guest User",
        rating,
        comment,
        date: new Date().toISOString().split("T")[0],
      };

      setReviews([newReview, ...reviews]);
      setRating(0);
      setComment("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* Review Form */}
      <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
        <h4 className="text-lg font-bold text-zinc-900 mb-4">
          Leave a Review for {stylistName.split(" ")[0]}
        </h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="focus:outline-none transition-transform active:scale-90"
              >
                <Star
                  className={cn(
                    "w-6 h-6 transition-colors",
                    (hover || rating) >= star
                      ? "fill-secondary text-secondary"
                      : "text-zinc-300",
                  )}
                />
              </button>
            ))}
            {rating > 0 && (
              <span className="text-sm font-bold text-zinc-500 ml-2">
                {rating}/5
              </span>
            )}
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience with us..."
            className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:ring-2 focus:ring-[#F8C8DC] focus:border-transparent transition-all outline-none resize-none min-h-[100px] text-zinc-600 font-medium"
          />

          <Button
            disabled={rating === 0 || !comment.trim() || isSubmitting}
            className="w-full h-12 bg-zinc-900 hover:bg-black text-white rounded-xl font-bold uppercase tracking-widest transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Post Review <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
          Latest Reviews
          <span className="text-sm font-medium text-zinc-400">
            ({reviews.length})
          </span>
        </h4>

        {reviews.length > 0 ? (
          <div className="grid gap-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-5 bg-white border border-zinc-100 rounded-2xl shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FDE6EF] flex items-center justify-center">
                      <User className="w-5 h-5 text-[#B76E79]" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">
                        {review.customerName}
                      </p>
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={cn(
                          "w-3 h-3",
                          s <= review.rating
                            ? "fill-secondary text-secondary"
                            : "text-zinc-200",
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-medium">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffReviews;
