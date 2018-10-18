module SessionsHelper

  def log_in(user)
    session[:user_id] = user.id
    redirect_to root_path 
  end 

  def log_out(user)
    session.delete(:user_id)
    @current_user = nil
    redirect_to root_path
  end 
end
