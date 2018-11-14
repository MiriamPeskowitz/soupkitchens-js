class CommentsController < ApplicationController


  def index
    @soupkitchens = Soupkitchen.all
    @comments = Comment.all
    @users = User.all
    render json: @comments, status: 200 
  end

  def new   
    @comment = Comment.new  
    @soupkitchen = Soupkitchen.find(params[:soupkitchen_id])  
    if !logged_in?
      # flash[:notice] = "You must be logged in"
    end 
  end 


  def create
    if logged_in?
      @soupkitchen = Soupkitchen.find(params[:soupkitchen_id])
      @comment = @soupkitchen.comments.build(comment_params)
      @comment.user_id = current_user.id
      render json: @soupkitchen, @comment, @comment.user_id, status: 200

      if @comment.save 
        flash[:notice] = "Thanks! We added your comment."
        render json: @soupkitchen
        # redirect_to soupkitchen_path(@soupkitchen)
      else 
        flash.now[:notice] = "Something went wrong, try again."  
        # render 'soupkitchens/show'
      end
    else
      flash[:notice] = "Gotta' log in to leave a review." 
      # redirect_to root_path -- delete, because it's now just the same page? 
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

