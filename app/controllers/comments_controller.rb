class CommentsController < ApplicationController


  def index
    @soupkitchens = Soupkitchen.all
    @comments = Comment.all
    @users = User.all
    # how to send json_response(@?????)
  end

  def new   
    @comment = Comment.new  
    @soupkitchen = Soupkitchen.find(params[:soupkitchen_id])  
    if !logged_in?
      # flash[:notice] = "You must be logged in to leave a comment." JS -- to dom 
      # redirect_to soupkitchens_path(@soupkitchen)
    end 
  end 

  def create
    if logged_in?
      @soupkitchen = Soupkitchen.find(params[:soupkitchen_id])
      @comment = @soupkitchen.comments.build(comment_params)
      @comment.user_id = current_user.id

      if @comment.save 
        # flash[:notice] = "Thanks! We added your comment."
        json_response(@soupkitchen)
        # redirect_to soupkitchen_path(@soupkitchen)
      else 
        # flash.now[:notice] = "Something went wrong, try again."  JS to DOM 
        # render 'soupkitchens/show'
      end
    else
      # flash[:notice] = "Gotta' log in to leave a review." JS to DOM 
      # redirect_to root_path
    end
  end


  # def show
  # Show all comments (with their soupkitchen), for admin use 
  # end 

  private 
  def comment_params
    params.require(:comment).permit(:title, :content, :soupkitchen_id, :user_id)
  end

  def set_comment
     @comment = Comment.find(params[:id])
  end
end

