class ApplicationController < ActionController::API
  include ActionController::Serialization

# was: ActionController::API
 # protects from CSRF-creates before_filter that calls the verify_authenticity_token function. 
  include SessionsHelper

  helper_method :current_user

  def login_required
    if !logged_in?
      redirect_to login_path, :notice => "Please login."
    end
  end

  def logged_in?
    !!current_user
    # or !current_user.nil? 
    # !! creates a boolean/True
  end 

  def current_user 
      @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end 

end

