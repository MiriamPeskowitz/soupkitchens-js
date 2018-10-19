class api::v1::SessionsController < ApplicationController


  def new
    @user = User.new
  end


  def create
  
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth_hash)
      log_in(@user)
  

    else   #if regular login 

      @user = User.find_by(email: params[:sessions][:email]) 
   
      if @user && @user.authenticate(params[:sessions][:password])   
         log_in(@user)
      
 
      else #still looking for true email validator. 
     
          flash.now[:notice] = "try again; have you already signed up? Did you type everything correctly?"
          render 'new'
      end
    end
  end

  def destroy
    log_out(@user)
  end 
end

 # why are there so many ways to logout? which is best? 
#     # session.clear, or use log_out from sessions helper 
#     # or  User.find(session[:user_id]).destroy      
#     # session[:user_id] = nil   
#     # session.delete(:user_id)
#     # @current_user = nil

  # protected
  #   def auth_hash
  #     request.env['omniauth.auth']
  #   end 
  
end
